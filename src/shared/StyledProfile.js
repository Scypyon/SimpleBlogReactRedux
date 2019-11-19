import styled from "styled-components";

export const MainCnt = styled.main`
  padding: 5vw 5vh;
  h1 {
    font-size: 8vw;
    margin: 0 0 1vw 0;
  }
  h5 {
    margin: 1vw 0 0 0;
    font-size: 3.5vw;
    color: #888;
  }

  h5 i {
    padding-right: 2vw;
    color: #828282;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3vw;
    }

    h5 {
      margin: 0.3vw 0 0 0;
      font-size: 1.4vw;
    }
    h5 i {
      padding-right: 0.6vw;
    }
  }
`;

export const StyledArticle = styled.article`
  font-size: 4vw;
  letter-spacing: 0.4px;
  color: #333;

  p:nth-child(2) {
    border-left: 3px solid #7ad6bb;
    color: #888;
    letter-spacing: 0.7px;
    padding-left: 4vw;
    margin: 5vw 0 3vw 5vw;
  }

  @media (min-width: 1024px) {
    font-size: 1.8vw;
    p:nth-child(2) {
      border-left: 4px solid #7ad6bb;
      margin: 3.5vw 0 1.5vw 3.5vw;
      padding: 1vw 0 1vw 2.5vw;
    }
  }
`;
