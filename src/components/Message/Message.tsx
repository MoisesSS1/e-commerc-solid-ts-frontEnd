import { ContainerMessage } from "./style";
import { useState, useEffect } from "react";

interface Props {
  msg: string;
  type: string;
}

const Message = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!props.msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);

    return;
  }, [props.msg]);

  return (
    <>
      {visible && (
        <ContainerMessage $type={props.type}>
          <h1>{props.msg}</h1>
        </ContainerMessage>
      )}
    </>
  );
};

export default Message;
