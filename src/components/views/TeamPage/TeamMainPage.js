import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getAllTeam } from "../../../_actions/teamAction";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import '../ProjectPage/ProjectMainPage.css';
import Team from "./Team";
import NavBar from "../../Parts/NavBar/MainNavBar"



function TeamMainPage() {
    const dispatch = useDispatch();

    const [Teams, setTeams] = useState([]);

    useEffect(() => {
        dispatch(getAllTeam()).then((res) => {
            setTeams(res.payload);
        });
    }, []);


    return (
        <main>
        <NavBar /><br/>
        <Link to="/project/write" style={{marginLeft : "460px"}}>
           <IoMdArrowRoundBack />
        </Link><br/>

        <h2 align="center">Team List</h2>
        <Link to="/team/write" style={{marginLeft : "980px"}}>
            <MdAdd/>
        </Link>
        <div>
            <div>
                <table border="1" className="mainTable">
                    <tbody align="center">
                        <tr align="center">
                            <td width="50px">ID</td>
                            <td width="150px">Team Name</td>
                            <td width="250px">Members</td>
                            <td width="75px"></td>
                        </tr>
                        {Teams.map(team => (
                        <Team key={team.idx} idx={team.idx} name={team.name} members={team.members} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </main>
    )
}

export default TeamMainPage