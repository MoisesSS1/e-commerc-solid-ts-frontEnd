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
  padding-left: 20px;

  p:hover {
    cursor: pointer;
  }

  a {
    width: 100%;
    color: white;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    a {
      width: 20%;
    }
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
    padding: 0px 20px;
    list-style: none;
  }
`;
