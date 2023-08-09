import { useState } from "react";
import { ContainerLogin, DivFormLogin } from "./style";
import api from "../../../services/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    api
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.data === "err") {
          console.log("Senha incorreta");
        } else {
          localStorage.setItem("token", res.data.data);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.data.message);
      });
  }

  return (
    <>
      <ContainerLogin>
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
