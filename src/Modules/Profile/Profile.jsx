import React from "react";

import { MainCnt, StyledArticle } from "shared/StyledProfile";

export default function Profile() {
  return (
    <MainCnt>
      <h1>Marilyn Monroe</h1>
      <h5>
        <i className="fas fa-map-marker-alt"></i>
        Poznań, PL
      </h5>
      <StyledArticle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magnam natus suscipit quis ut nesciunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Exercitationem deleniti, <br />
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magnam natus suscipit quis ut nesciunt!
        </p>
      </StyledArticle>
    </MainCnt>
  );
}
