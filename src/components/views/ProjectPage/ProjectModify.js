import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import NavBar from "../../Parts/NavBar/MainNavBar";
import {
  projectModify,
  getProjectDetail,
} from "../../../_actions/projectAction";
import "./Button.css";

function ProjectModify(props) {
  // 게시물 수정
  const dispatch = useDispatch();
  const param = useParams();
  const idx = param.idx;
  var URL = "/project/" + idx + "/read/";

  const [Name, setName] = useState("");
  const [Members, setMembers] = useState("");
  const [Title, setTitle] = useState("");
  const [Info, setInfo] = useState("");
  const [Team_idx, setTeam_idx] = useState(""); // 팀 인덱스 값 임의로 지정

  useEffect(() => {
    dispatch(getProjectDetail(idx)).then((res) => {
      setName(res.payload.name);
      setMembers(res.payload.members);
      setTitle(res.payload.title);
      setInfo(res.payload.info);
    }, []);
  }, []);

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onMembersHandler = (event) => {
    setMembers(event.currentTarget.value);
  };

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const onInfoHandler = (event) => {
    setInfo(event.currentTarget.value);
  };

  const onChooseTeam = (e) => {
    props.history.push(`/team`);
  };

  const onModify = (e) => {
    e.preventDefault();

    if (!Name) {
      alert("팀 이름을 적어주세요!");
    } else if (!Members) {
      alert("팀원을 적어주세요!");
    } else if (!Title) {
      alert("제목을 적어주세요!");
    } else if (!Info) {
      alert("세부사항을 적어주세요!");
    } else {
      const postBody = {
        idx: idx,
        name: Name,
        members: Members,
        title: Title,
        info: Info,
      };
      console.log(postBody);

      dispatch(projectModify(postBody)).then((res) => {
        console.log(res);
        if (res) {
          props.history.push(`/project/${idx}/read/`);
        } else {
          alert("게시물 수정에 실패했습니다.");
        }
      });
    }
  };

  return (
    <span>
      <NavBar />
      <div>
        <br />
        <Link to={URL} className="back">
          <IoMdArrowRoundBack />
        </Link>
        <br />
        <br />
        <div align="center">
          <h5>| Project Modify |</h5>
          <br />

          <div>
            <span>Team Name</span>
            <br />
            <input value={Name} onChange={onNameHandler} readOnly/>
          </div>
          <br />

          <div>
            <span>Team Member</span>
            <br />
            <input
              placeholder="Pick a team member through the button"
              value={Members}
              onChange={onMembersHandler}
              readOnly
            />
            {/* <button className="chooseBtn" onClick={onChooseTeam}>Choose team</button> */}
          </div>
          <br />

          <div>
            <span>Project Title</span>
            <br />
            <input value={Title} onChange={onTitleHandler} />
          </div>
          <br />

          <div>
            <span>● Project Information</span>
            <br />
            <textarea
              value={Info}
              onChange={onInfoHandler}
              cols="40"
              rows="5"
            />
          </div>
          <br />
          <br />

          <button className="modifyBtn" onClick={onModify}>
            Modify
          </button>
        </div>
      </div>
    </span>
  );
}

export default ProjectModify;
