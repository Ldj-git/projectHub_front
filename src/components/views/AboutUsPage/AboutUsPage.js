import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from '../../Parts/NavBar/MainNavBar';

function AboutUsPage(props) {
  return (
    <div>
      <NavBar />
      <div align="center">
          <br></br>
          <h1> Webgrus 웹2팀 프로젝트 입니다. </h1>
          <br></br>
          <h3>프론트 : 전성표, 박준희</h3>
          <h3>백엔드 : 이동준</h3>
      </div>
      <br />
    </div>
  );
}

export default withRouter(AboutUsPage);
