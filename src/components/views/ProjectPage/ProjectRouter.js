import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectMainPage from "./ProjectMainPage";
import ProjectDetail from "./ProjectDetail";
import NewProject from "./NewProject";
import ProjectModify from "./ProjectModify";
import TeamMainPage from "../TeamPage/TeamMainPage";
import TeamDetail from "../TeamPage/TeamDetail";
import NewTeam from "../TeamPage/NewTeam";
import TeamModify from "../TeamPage/TeamModify";

class ProjectRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/project/" component={ProjectMainPage} />
            <Route exact path="/project/read/:idx" component={ProjectDetail} />
            <Route exact path="/project/write" component={NewProject} />
            <Route
              exact
              path="/project/update/:idx"
              component={ProjectModify}
            />

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

export default ProjectRouter;
