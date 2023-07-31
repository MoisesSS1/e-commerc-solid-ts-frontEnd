import { useState } from "react";
import { ContainerLogin, DivFormLogin } from "./style";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
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

          <button onSubmit={(e) => handleSubmit(e)}>Login</button>
        </form>
      </DivFormLogin>
    </ContainerLogin>
  );
};

export default Login;
