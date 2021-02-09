import {
  TEAM_UPLOAD_SUCCESS,
  TEAM_UPLOAD_FAILURE,
  TEAM_MODIFY_SUCCESS,
  TEAM_MODIFY_FAILURE,
  TEAM_DELETE,
  GET_TEAM_DETAIL,
  GET_ALL_TEAM,
} from "./types";
import axios from "axios";
import { request } from "../utils/axios";
import { SERVER_API } from "./config";

// 팀 생성
export const teamUpload = (datas) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(datas);
  let result = axios
    .post(`/team/create`, datas, config)
    .then((res) => {
      dispatch({ type: TEAM_UPLOAD_SUCCESS, payload: res.data });
      return true;
    })
    .catch((err) => {
      dispatch({ type: TEAM_UPLOAD_FAILURE, payload: err });
      return false;
    });
  return result;
};

// 팀 수정
export function teamModify(dataTosubmit, idx) {
  const data = request("post", "/team/update", dataTosubmit);

  return {
    type: TEAM_MODIFY_FAILURE,
    payload: data,
  };
}

// 팀 삭제
export const teamDelete = (idx) => {
  const request = axios
    .get(`${SERVER_API}/team/delete/${idx}`)
    .then((res) => res.data);

  return {
    type: TEAM_DELETE,
    payload: request,
  };
};

//해당 팀의 디테일 정보받기
export function getTeamDetail(idx) {
  const request = axios
    .get(`${SERVER_API}/team/${idx}`)
    .then((res) => res.data);

  return {
    type: GET_TEAM_DETAIL,
    payload: request,
  };
}

//모든 팀의 정보받기
export function getAllTeam() {
  const request = axios.get(`${SERVER_API}/team`).then((res) => res.data);

  return {
    type: GET_ALL_TEAM,
    payload: request,
  };
}
