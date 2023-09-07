import { useEffect, useState } from "react";
import { ContainerLogin, DivFormLogin } from "./style";
import api from "../../../services/axios";
import { useNavigate } from "react-router-dom";
import Message from "../../../components/Message/Message";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    api
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.data === "err") {
          setMsg("Senha incorreta!");
          setType("error");
        } else {
          localStorage.setItem("token", res.data.data);
          navigate("/");
        }
      })
      .catch((err) => {
        setMsg(err.response.data.message);
        setType("error");
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
      setType("");
    }, 3000);
  }, [msg]);

  return (
    <>
      <ContainerLogin>
        <Message msg={msg} type={type}></Message>
        <DivFormLogin>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              minLength={5}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              minLength={8}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button>Login</button>
          </form>
        </DivFormLogin>
      </ContainerLogin>
    </>
  );
};

export default Login;
