import React,{Component} from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
import ProjectPage from "./components/views/ProjectPage/ProjectRouter";
import AboutUsPage from "./components/views/AboutUsPage/AboutUsPage";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  render(){
      return(
         <BrowserRouter>
         <div>
           <Switch>
             <Route exact  path="/" component={LandingPage} />
             <Route exact  path="/login" component={LoginPage} />
             <Route exact path="/register" component={RegisterPage} />
             <Route exact path="/project" component={ProjectPage} />
             <Route exact path="/AboutUs" component={AboutUsPage} />
           </Switch>
         </div>
       </BrowserRouter>
        
      );
  }
}

export default App;
