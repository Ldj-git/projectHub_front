import React from 'react'
import { Link } from 'react-router-dom';
import '../ProjectPage/Project.css';


function Team({idx, name, members}) {
    
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
                <Link to="/project/write"><button>등록</button></Link>
            </td>
        </tr>
    )
}

export default Team