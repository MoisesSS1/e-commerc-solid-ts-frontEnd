import { useState } from "react";
import { ContainerLogin, DivFormLogin } from "./style";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <ContainerLogin>
      <DivFormLogin>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
      </DivFormLogin>
    </ContainerLogin>
  );
};

export default Login;
