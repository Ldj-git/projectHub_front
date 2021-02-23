import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
//import ProjectPage from "./components/views/ProjectPage/ProjectRouter";
import AboutUsPage from "./components/views/AboutUsPage/AboutUsPage";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectMainPage from "./components/views/ProjectPage/ProjectMainPage";
import ProjectDetail from "./components/views/ProjectPage/ProjectDetail";
import NewProject from "./components/views/ProjectPage/NewProject";
import ProjectModify from "./components/views/ProjectPage/ProjectModify";

import CreateContent from "./components/views/PostPage/CreateContent";
import ReadContent from "./components/views/PostPage/ReadPostingContent";
import UpdateContent from "./components/views/PostPage/UpdateContent";

import TeamMainPage from "./components/views/TeamPage/TeamMainPage";
import TeamDetail from "./components/views/TeamPage/TeamDetail";
import NewTeam from "./components/views/TeamPage/NewTeam";
import TeamModify from "./components/views/TeamPage/TeamModify";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            {/* <Route exact path="/project" component={ProjectPage} /> */}
            <Route exact path="/AboutUs" component={AboutUsPage} />

            <Route exact path="/project" component={ProjectMainPage} />
            <Route exact path="/project/:idx/read/" component={ProjectDetail} />
            <Route exact path="/project/write" component={NewProject} />
            <Route exact path="/project/update/:idx" component={ProjectModify} />

            <Route exact path="/project/:project_idx/post/" component={CreateContent}/>
            <Route exact path="/project/:project_idx/readContent/:content_idx" component={ReadContent}/>
            <Route exact path="/project/:project_idx/updateContent/:content_idx" component={UpdateContent}/>

            <Route exact path="/team" component={TeamMainPage} />
            <Route exact path="/team/read/:idx" component={TeamDetail} />
            <Route exact path="/team/write" component={NewTeam} />
            <Route exact path="/team/update/:idx" component={TeamModify} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
