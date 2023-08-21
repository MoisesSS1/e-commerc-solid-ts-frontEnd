import { styled } from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const DataItem = styled.div`
  margin-left: 50px;
  text-align: left;
  input {
    width: 50px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    text-align: center;
  }
`;
