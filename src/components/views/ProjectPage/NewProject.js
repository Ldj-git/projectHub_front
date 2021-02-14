import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { projectUpload } from "../../../_actions/projectAction";
import { getTeamDetail } from "../../../_actions/teamAction";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import NavBar from "../../Parts/NavBar/MainNavBar";
import "./Button.css";

function NewProject(props) {  // 글 작성
  const param = useParams();
  const idx = param.idx;
  const dispatch = useDispatch();
  const location=useLocation();

  const [Name, setName] = useState("");
  const [Members, setMembers] = useState("");
  const [Title, setTitle] = useState("");
  const [Info, setInfo] = useState("");
  const [Team_idx, setTeam_idx] = useState("");

  useEffect(() => {
    if(!location.state) return;
    console.log('selectedTeamIdx:>>', location.state.selectedTeamIdx)
    setTeam_idx(location.state?.selectedTeamIdx)
}, [location])

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

  const onUpload = (e) => {
    e.preventDefault();

    if (!Team_idx) {
      alert("팀을 골라주세요!");
    } else
     if (!Title) {
      alert("제목을 적어주세요!");
    } else if (!Info) {
      alert("세부사항을 적어주세요!");
    } else {
      const formData = {
        team_idx: Team_idx,
        title: Title,
        info: Info,
      };

      dispatch(projectUpload(formData)).then((res) => {
        if (res) {
          props.history.push("/project/");
        } else {
          alert("업로드에 실패했습니다!!");
        }
      });
    }
  };

  return (
    <main>
      <NavBar />
      <div>
        <br />
        <Link to="/project/" style={{ marginLeft: "550px" }}>
          <IoMdArrowRoundBack />
        </Link>
        <br />
        <br />
        <div align="center">
          <h5>| Project Upload |</h5>
          <br />

          <div>
            <span>● Team Name</span>
            <br />
            <input value={location.state?.selectedName} onChange={onNameHandler} readOnly/>
          </div>
          <br />

          <div>
            <span>● Team Member</span>
            <br />
            <input
              placeholder="Pick a team member through the button"
              value={location.state?.selectedMembers}
              onChange={onMembersHandler}
              readOnly
            />
            <button className="chooseBtn" onClick={onChooseTeam}>
              Choose team
            </button>
          </div>
          <br />

          <div>
            <span>● Project Title</span>
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

          <button className="uploadBtn" onClick={onUpload}>
            Upload
          </button>
        </div>
      </div>
    </main>
  );
}

export default NewProject;
