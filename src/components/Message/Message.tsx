import { ContainerMessage } from "./style";
import { useState } from "react";

interface Props {
  message: string;
  type: string;
}

const Message = (props: Props) => {
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  setMsg(props.message);
  setType(props.type);

  setTimeout(() => {
    setMsg("");
    setType("");
  }, 3000);

  return (
    <ContainerMessage value={type}>
      <p>{msg} </p>
    </ContainerMessage>
  );
};

export default Message;
