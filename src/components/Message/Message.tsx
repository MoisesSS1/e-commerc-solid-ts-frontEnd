import { ContainerMessage } from "./style";
import { useState } from "react";

interface Props {
  message: string;
  type: string;
}

const Message = (props: Props) => {
  const [msg, setMsg] = useState(props.message.toString());

  let msgColor;

  if (props.type === "error") {
    msgColor = "red";
  } else {
    msgColor = "blue";
  }

  return (
    <>
      <ContainerMessage $msgColor={msgColor}>
        <h1>{props.message}</h1>
      </ContainerMessage>
    </>
  );
};

export default Message;
