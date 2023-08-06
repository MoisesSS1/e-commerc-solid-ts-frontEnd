import { useState } from "react";
import { ContainerCreateAccount, DivFormCreateAccount } from "./style";
import api from "../../../services/axios";
import Message from "../../../components/Message/Message";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [returnCreate, setReturnCreate] = useState({ message: "", type: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await api
      .post("/user/create", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setReturnCreate({
          message: "Usuário cadastrado com sucesso!",
          type: "sucess",
        });
      })
      .catch(() => {
        setReturnCreate({
          message: "Erro ao criar conta, tente novamente!",
          type: "error",
        });
      });
  }

  return (
    <>
      <ContainerCreateAccount>
        <DivFormCreateAccount>
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <button>Criar conta</button>
          </form>
        </DivFormCreateAccount>
      </ContainerCreateAccount>

      {returnCreate.message && (
        <Message message={returnCreate.message} type={returnCreate.type} />
      )}
    </>
  );
};

export default CreateUser;
