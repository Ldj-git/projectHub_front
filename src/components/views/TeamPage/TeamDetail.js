import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../../Parts/NavBar/MainNavBar"
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getTeamDetail, teamDelete } from "../../../_actions/teamAction";
import '../ProjectPage/Button.css';


function TeamDetail(props) {
    const param = useParams();
    const idx = param.idx;
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const[Name, setName]= useState("")
    const[Members, setMembers]= useState("")

    useEffect(() => {
        dispatch(getTeamDetail(idx)).then((res) => {
        console.log(res);
        setName(res.payload.name);
        setMembers(res.payload.members);
        });
    }, []);


    const onModify=(e)=>{
        props.history.push(`/team/update/${idx}`);
    }


    const onDelete=(e)=>{
        e.preventDefault();
        if (window.confirm("Delete this team?")){
            dispatch(teamDelete(idx)).then((response) => {
                if (response) {
                props.history.push(`/team`);
                } else {
                alert("삭제에 실패했습니다!!");
                }
            });
            } else{
                setOpen(false);
            }
    }
    
    return (
        <span>
        <NavBar /><br/>
        <Link to="/team" style={{marginLeft : "460px"}}>
           <IoMdArrowRoundBack />
        </Link>
        <button className="modify" style={{marginLeft : "750px"}} onClick={onModify}>수정</button>
        <button className="delete" style={{marginLeft : "810px"}} onClick={onDelete}>삭제</button><br/>
        <div align="center"><br/>
          <h4>| TEAM |</h4><br/>

          <div>
            <span>Team Name</span><br/>
            <p>{Name}</p>
          </div><br/>

          <div>
            <span>Team Member</span><br/>
            <p>{Members}</p>
          </div><br/>
        </div>
      </span>
    )
}

export default TeamDetail
