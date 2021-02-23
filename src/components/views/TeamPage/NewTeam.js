import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { teamUpload } from "../../../_actions/teamAction";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import NavBar from "../../Parts/NavBar/MainNavBar";
import "../ProjectPage/Button.css";

function NewTeam(props) {
  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [Members, setMembers] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onMembersHandler = (event) => {
    setMembers(event.currentTarget.value);
  };

  const onUpload = (e) => {
    e.preventDefault();

    if (!Name) {
      alert("팀 이름을 적어주세요!");
    } else if (!Members) {
      alert("팀원을 적어주세요!");
    } else {
      // const formData = new FormData();
      // formData.append("name", Name);
      // formData.append("members", Members);
      const formData = {
        name: Name,
        members: Members,
      };
      dispatch(teamUpload(formData)).then((res) => {
        if (res) {
          props.history.push("/team");
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
        <Link to="/team" className="back">
          <IoMdArrowRoundBack />
        </Link>
        <br />
        <br />
        <div align="center">
          <h5>| Team Upload |</h5>
          <br />

          <div>
            <span>● Team Name</span>
            <br />
            <input value={Name} onChange={onNameHandler} width="200px" />
          </div>
          <br />
          <br />

          <div>
            <span>● Team Member</span>
            <br />
            <input value={Members} onChange={onMembersHandler} />
          </div>
          <br />
          <br />

          <button className="teamBtn" onClick={onUpload}>
            Upload
          </button>
        </div>
      </div>
    </main>
  );
}

export default NewTeam;
