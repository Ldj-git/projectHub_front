import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProject } from "../../../_actions/projectAction";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import "./ProjectMainPage.css";
import Project from "./Project";
import MainNavBar from "../../Parts/NavBar/MainNavBar";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function ProjectMainPage() {
  // 프로젝트 카테고리 눌렀을 때 나오는 화면
  const dispatch = useDispatch();

  const [Projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProject()).then((res) => {
      setProjects(res.payload);
    });
  }, []);

  //로그인 안되있으면 글쓰기 버튼 안보이게
  var status = null;
  if(cookies.get("user")!==undefined){
    status=<Link to="/project/write" className="write">
    <MdAdd />
  </Link>
  }
  return (
    <main>
      <MainNavBar />
      <br />
      <br />
      <h2 align="center">Projects</h2>
      {status}
      
      <div>
        <div>
          <table border="1" className="mainTable">
            <tbody align="center">
              <tr align="center">
                <td width="50px">ID</td>
                <td width="200px">Title</td>
                <td width="100px">Name</td>
                <td width="150px">Members</td>
                <td width="210px">Upload Date</td>
              </tr>
              {Projects.map((project) => (
                <Project
                  key={project.idx}
                  idx={project.idx}
                  title={project.title}
                  name={project.name}
                  members={project.members}
                  addDate={project.addDate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default ProjectMainPage;
