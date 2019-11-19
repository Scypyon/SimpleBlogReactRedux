import styled from "styled-components";
import backgroundImage from "img/beachsand.jpg";
import logoImage from "img/monroe.jpg";
import { Link } from "react-router-dom";

export const BackgroundImage = styled.div`
  background: url("${backgroundImage}") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 50vw;

  @media(min-width:1024px){
    height:25vw;
    background-position:50%;
  }
`;

export const HeaderLine = styled.header`
  width: 20vw;
  background-color: #7ad6bb;
  height: 13vw;
  border-top: 1px solid #fff;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 10vw 10vw;
  padding-left: 80vw;
  @media (min-width: 1024px) {
    height: 5.5vw;
    border-top: 2px solid #fff;
    grid-template-columns: 5vw 5vw;
  }
`;

export const StyledLink = styled(Link)`
  i {
    color: #fff;
    padding: 1vw;
    font-size: 6vw;
  }

  @media (min-width: 1024px) {
    i {
      font-size: 3vw;
      padding: 0.2vw;
    }
  }
`;

export const StyledLogo = styled.div`
  background: url("${logoImage}") no-repeat;
  border-radius:50%;
  width:22vw;
  height:22vw;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position:absolute;
  left:5vw;
  top:42vw;
  border:1vw solid rgba(255, 255, 255, 0.5);

  @media (min-width: 1024px) {
    width:12vw;
    height:12vw;
    left:3vw;
    top:19vw;
    border:.6vw solid rgba(255, 255, 255, 0.5);
  }
`;
