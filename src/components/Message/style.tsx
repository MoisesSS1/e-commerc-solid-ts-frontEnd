import { styled } from "styled-components";

export const ContainerMessage = styled.div<{ $msgColor: string }>`
  width: 300px;
  color: black;
  background-color: ${(props) => props.$msgColor};
  height: 30px;
  position: absolute;
  top: 50%;
  left: 40%;
  padding: 5px 0px;
  text-align: center;
  margin: 0px auto;
`;
