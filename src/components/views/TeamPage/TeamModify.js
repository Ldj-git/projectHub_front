import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import NavBar from "../../Parts/NavBar/MainNavBar";
import { teamModify, getTeamDetail } from "../../../_actions/teamAction";
import "../ProjectPage/Button.css";

function TeamModify(props) {
  const dispatch = useDispatch();
  const param = useParams();
  const idx = param.idx;
  var URL = "/team/read/" + idx;

  const [Name, setName] = useState("");
  const [Members, setMembers] = useState("");

  useEffect(() => {
    dispatch(getTeamDetail(idx)).then((res) => {
      setName(res.payload.name);
      setMembers(res.payload.members);
    }, []);
  }, []);

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onMembersHandler = (event) => {
    setMembers(event.currentTarget.value);
  };

  const onModify = (e) => {
    e.preventDefault();

    if (!Name) {
      alert("팀 이름을 적어주세요!");
    } else if (!Members) {
      alert("팀원을 적어주세요!");
    } else {
      const postBody = {
        idx: idx,
        name: Name,
        members: Members,
      };
      console.log(postBody);

      dispatch(teamModify(postBody)).then((res) => {
        console.log(res);
        if (res) {
          props.history.push(`/team/read/${idx}`);
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
          <h5>| Team Modify |</h5>
          <br />

          <div>
            <span>Team Name</span>
            <br />
            <input value={Name} onChange={onNameHandler} />
          </div>
          <br />

          <div>
            <span>Team Member</span>
            <br />
            <input value={Members} onChange={onMembersHandler} />
          </div>
          <br />
          <br />

          <button className="teamBtn" onClick={onModify}>
            Modify
          </button>
        </div>
      </div>
    </span>
  );
}

export default TeamModify;
