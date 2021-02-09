import { combineReducers } from "redux";
import user from "./userReducer";
import project from "./projectReducer";
import team from "./teamReducer";

const rootReducer = combineReducers({
  user,
  project,
  team,
});

export default rootReducer;
