import { styled } from "styled-components";

export const ContainerMessage = styled.div<{ $type: string }>`
  width: 100%;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$type === "error" ? "#FF0000" : "#00FF00"};
`;
