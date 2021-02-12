import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../../Parts/NavBar/MainNavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getProjectDetail, projectDelete } from "../../../_actions/projectAction";
import "./Button.css";
import postingStore from "../../../_reducers/postingReducer";
import './ProjectDetail.css';

function GetPostingContents() {
  var contents = postingStore.getState().contents
  var lists = [];
  var i=0;

  while(i< contents.length){
    lists.push(
      <tbody key={i}>
      <tr border="1" className="table" align="center">
        <td width="100px"><Link to={'/project/readContent/' + contents[i].idx}>
          id: {contents[i].idx}
        </Link></td>
      
        <td width="200px"><Link to={'/project/readContent/' + contents[i].idx}>
         title: {contents[i].title}
        </Link></td>
      
        <td width="150px"><Link to={'/project/readContent/' + contents[i].idx}>
          user_id: {contents[i].user_id}
        </Link></td>

        <td width="250px">
          addDate: {contents[i].addDate}
        </td>

        <td width="250px">
          updateDate: {contents[i].updateDate}
        </td>
      </tr>
      </tbody>
    )
    i++;
  }

  return(
    <table>
      {lists}
    </table>  
  )
}

function ProjectDetail(props) { // 게시물을 눌렀을 때 나오는 화면
  const param = useParams();
  const idx = param.idx;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [AddDate, setAddDate] = useState("");
  const [UpdateDate, setUpdateDate] = useState("");
  const [Name, setName] = useState("");
  const [Members, setMembers] = useState("");
  const [Title, setTitle] = useState("");
  const [Info, setInfo] = useState("");

  const [Team_idx, setTeam_idx] = useState(""); // 팀 인덱스 값 임의로 지정

  useEffect(() => {
    dispatch(getProjectDetail(idx)).then((res) => {
      console.log(res);
      setAddDate(res.payload.addDate);
      setUpdateDate(res.payload.updateDate);
      setName(res.payload.name);
      setMembers(res.payload.members);
      setTitle(res.payload.title);
      setInfo(res.payload.info);
      setTeam_idx(res.payload.team_idx); // 팀 인덱스 응답
    });
  }, []);

  const onModify = (e) => {
    props.history.push(`/project/update/${idx}`);
  };

  const onDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Delete this posting?")) {
      dispatch(projectDelete(idx)).then((response) => {
        if (response) {
          props.history.push(`/`);
        } else {
          alert("삭제에 실패했습니다!!");
        }
      });
    } else {
      setOpen(false);
    }
  };

  return (
    <span>
      <NavBar />
      <br />
      <Link to="/project/" className="back">
        <IoMdArrowRoundBack />
      </Link>
      <div align="center">
        <button className="modify" style={{ marginLeft: "250px" }} onClick={onModify}>수정</button>
        <button className="delete" style={{ marginLeft: "360px" }} onClick={onDelete}>삭제</button>
        <h4>PROJECT | {Title}</h4>
        <small>Upload Date: {AddDate}</small>
        <br />
        <small>Modify Date: {UpdateDate}</small>
        <br />
        <br />

        <div>
          <span>Team Name</span>
          <br />
          <p>{Name}</p>
        </div>
        <br />

        <div>
          <span>Team Member</span>
          <br />
          <p>{Members}</p>
        </div>
        <br />

        <div>
          <span>Project Information</span>
          <br />
          <div>{Info}</div>
        </div>
        <br />

        {/*POSTING 부분*/}
        <div>----------------------------------------------------</div>
        <h4>POSTING</h4>
        {GetPostingContents()}
          <Link to={'/project/post/' + idx}><button>ADD POST</button></Link>
      </div>
    </span>
  );
}

export default ProjectDetail;
