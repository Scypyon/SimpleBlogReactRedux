import React from "react";

import {
  BackgroundImage,
  HeaderLine,
  StyledLink,
  StyledLogo
} from "shared/StyledApp";

function App() {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <HeaderLine>
        <StyledLink to="/profile">
          <i className="fas fa-user"></i>
        </StyledLink>
        <StyledLink to="gallery">
          <i className="fas fa-image"></i>
        </StyledLink>
        <StyledLogo></StyledLogo>
      </HeaderLine>
    </>
  );
}

export default App;
