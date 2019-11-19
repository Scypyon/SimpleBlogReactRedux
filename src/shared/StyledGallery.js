import styled from "styled-components";

export const SectionGallery = styled.section`
  margin: 10vw 5vw;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledImage = styled.div`
  background-color: #f2f2f2;
  width: 80vw;
  height: 40vw;
  border: 2vw solid #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw auto;

  img {
    width: 40vw;
    height: auto;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 20vw;
    height: 10vw;

    img {
      width: 10vw;
    }
  }
`;
