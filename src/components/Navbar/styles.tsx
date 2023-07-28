import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: #5a2d82;
  display: flex;
  font-size: 1.2em;
  color: #fffefb;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;

  p:hover {
    cursor: pointer;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const UlNavbar = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  li {
    padding: 0px 30px;
    list-style: none;
  }
`;
