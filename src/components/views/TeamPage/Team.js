import React from 'react'
import { Link } from 'react-router-dom';
import '../ProjectPage/Project.css';


function Team({idx, name, members}) {       // 여기에 있는 idx는 팀에 관한 idx입니당
    
    var URL= "/team/read/"+idx;
    return (
        <tr border="1" className="table" align="center">   
            <td width="50px">
                <Link to={URL}>{idx}</Link>
            </td>
            <td width="150px">
                <Link to={URL}>{name}</Link>
            </td>
            <td width="250px">
                <Link to={URL}>{members}</Link>
            </td>
            <td width="75px">
                <Link to={{pathname:"/project/write", state: {selectedTeamIdx: idx, selectedMembers:members, selectedName:name}}}><button>등록</button></Link>
            </td>
        </tr>
    )
}

export default Team