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
            minLength={3}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            minLength={8}
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
          <button onSubmit={(e) => handleSubmit(e)}>Criar conta</button>
        </form>
      </DivFormCreateAccount>
    </ContainerCreateAccount>
  );
};

export default CreateUser;
