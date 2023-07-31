import { useState } from "react";
import { ContainerCreateAccount, DivFormCreateAccount } from "./style";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <ContainerCreateAccount>
      <DivFormCreateAccount>
        <form>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button onClick={(e) => handleSubmit(e)}>Criar conta</button>
        </form>
      </DivFormCreateAccount>
    </ContainerCreateAccount>
  );
};

export default CreateUser;
