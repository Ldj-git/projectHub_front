import {TEAM_UPLOAD_SUCCESS,TEAM_UPLOAD_FAILURE,TEAM_MODIFY_SUCCESS,TEAM_MODIFY_FAILURE,TEAM_DELETE,GET_TEAM_DETAIL,GET_ALL_TEAM } from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
      case TEAM_UPLOAD_SUCCESS:
        return { ...state, teamUploadSuccess: true };
      
  
      case TEAM_UPLOAD_FAILURE:
        return { ...state, teamUploadSuccess: false, err: action.payload };
    
  
      case TEAM_MODIFY_SUCCESS:
        return { ...state, teamModifySuccess: true };
       
  
      case TEAM_MODIFY_FAILURE:
        return { ...state, teamModifySuccess: false, err: action.payload };
       
  
      case TEAM_DELETE:
        return { ...state, teamDelete: true };
       

      case GET_TEAM_DETAIL:
        return { ...state, teamDetail: action.payload };
      

      case GET_ALL_TEAM:
        return { ...state, allTeam: action.payload };
      

      default:
        return state;
    }
}