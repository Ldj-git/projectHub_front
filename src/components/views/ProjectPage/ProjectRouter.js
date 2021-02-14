// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ProjectMainPage from "./ProjectMainPage";
// import ProjectDetail from "./ProjectDetail";
// import NewProject from "./NewProject";
// import ProjectModify from "./ProjectModify";

// import CreateContent from "../PostPage/CreateContent"
// import ReadContent from "../PostPage/ReadPostingContent"
// import UpdateContent from "../PostPage/UpdateContent"

// import TeamMainPage from "../TeamPage/TeamMainPage";
// import TeamDetail from "../TeamPage/TeamDetail";
// import NewTeam from "../TeamPage/NewTeam";
// import TeamModify from "../TeamPage/TeamModify";

// class ProjectRouter extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Switch>
//             <Route exact path="/project/" component={ProjectMainPage} />
//             <Route exact path="/project/read/:idx" component={ProjectDetail} />
//             <Route exact path="/project/write" component={NewProject} />
//             <Route exact path="/project/update/:idx" component={ProjectModify} />

//             <Route exact path="/project/post/:idx" component={CreateContent}/>
//             <Route exact path="/project/readContent/:idx" component={ReadContent}/>
//             <Route exact path="/project/updateContent/:idx" component={UpdateContent}/>

//             <Route exact path="/team" component={TeamMainPage} />
//             <Route exact path="/team/read/:idx" component={TeamDetail} />
//             <Route exact path="/team/write" component={NewTeam} />
//             <Route exact path="/team/update/:idx" component={TeamModify} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default ProjectRouter;
