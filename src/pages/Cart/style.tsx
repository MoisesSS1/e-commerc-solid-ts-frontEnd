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
  min-width: 500px;
  min-height: 500px;
  margin: 50px;

  button {
    margin: 15px 0px;
    border-radius: 25px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const ItemsCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CartEmpty = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectAdress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;

  p {
    margin: 20px auto;
  }

  input {
    padding: 3px;
    text-decoration: none;
    border: 2px solid #ccc;
    text-align: center;
  }

  input[type="number"] {
    width: 70px;
    border-style: none;
    border-bottom: 1px solid #080808;
  }

  span {
    margin: 10px;
  }

  span:hover {
    cursor: pointer;
  }
`;

export const DivInfoAdress = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const DivOrderFinalize = styled.div`
  p {
    margin-top: 30px;

    border-bottom: 5px solid #a069df;
  }
`;

export const DivAdressInfo = styled.div`
  border-bottom: 5px solid #a069df;
  margin-bottom: 30px;
  margin-top: 30px;

  p {
    margin-top: 3px;
    border-bottom: none;
  }
`;
