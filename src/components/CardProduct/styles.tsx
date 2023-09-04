import { styled } from "styled-components";

export const ContainerProduct = styled.div`
  width: 300px;
  min-height: 300px;
  border-radius: 10px;
  border: 3px solid #ccc;
  margin: 30px;
  padding: 5px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.1em;

  img {
    padding: 2px 0px;
    width: 100%;
    height: 60%;
  }

  span {
    margin: 5px 0px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    font-size: 1em;
    width: 120px;
    margin: 10px;
    padding: 0px;
    min-height: 0px;
  }
`;
