import { styled } from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 93vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivFormLogin = styled.div`
  width: 500px;
  height: 200px;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }

  form input {
    padding: 10px;
    border-style: none;
    border: 3px solid #b6b6b6;
  }

  form input:focus {
    box-shadow: 0 0 0 0;
    border: 3px solid #9c67ce;
  }

  button {
    width: 100px;
    text-decoration: none;
    border-style: none;
    background-color: #9c67ce;
    padding: 15px;
    font-size: 1.2em;
  }

  button:hover {
    color: white;
  }
`;
