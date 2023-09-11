import { styled } from "styled-components";

export const ContainerMessage = styled.div<{ $type: string }>`
  position: fixed;
  top: 50vh;
  padding: 1em;
  border: none;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$type === "error" ? "#e26464" : "#7cf07c"};

  @media (max-width: 700px) {
    top: 40vh;
    width: 60%;
  }
`;
