import styled from "styled-components";

export const ContainerShowProducts = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const BannerShowProducts = styled.div`
  height: 60vh;
  width: 80%;
  margin: 0 auto;
  background-image: url("https://img.freepik.com/vetores-gratis/textura-para-camisa-de-futebol-de-futebol_29096-1271.jpg?w=900&t=st=1690283208~exp=1690283808~hmac=55fb410b44cb51f745de3dbb3a1fddcf42731b784c86bce3dd9c4835f41eebae");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  margin: 30px auto;

  @media (max-width: 700px) {
    background-attachment: initial;
    width: 100%;
    height: 30vh;
    background-size: contain;
  }
`;

export const FindShowProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
