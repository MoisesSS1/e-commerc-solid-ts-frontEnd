import { styled } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(234, 237, 237);
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 93vh;
`;

export const CartDiv = styled.div`
  padding: 30px;
  border: 1px solid #858484;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 1.3em;
  color: #0a0a0a;
  background-color: rgb(255, 255, 255);
  width: 600px;
  min-height: 500px;
  margin: 50px;
`;

export const ItemsCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
