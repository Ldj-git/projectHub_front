import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import './ReadPostingContent.css';
import {request} from "../../../utils/axios"
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function GetPostingContent(idx){
  const [dummy, reload] = useState(false);
  const [currentContent,setContent] = useState([]);

  useEffect(async() => {
      var response = await axios.get('http://3.21.104.168:8765/posting/'+idx);
      setContent(response.data[0]);
    },[currentContent]);

    return (
      <div>
          <p><input id='title_txt' type="text" readOnly defaultValue={currentContent.title}></input></p>
            <ReactMarkdown source={currentContent.content} className='Readmarkdown'/>
      </div>
    )
}

function GetButtons(project_idx,content_idx){
  if(cookies.get("user")!==undefined){
    return(
      <div>
        <Link to={"/project/" + project_idx + "/updateContent/" + content_idx}><button>수정</button></Link>
        <Link to={"/project/"}><button onClick={function(){
          const response = request("get", "/posting/delete/" + content_idx);
          console.log(response);
        }}>삭제</button></Link>
      </div>
    )
  }
  else return;
}



function ReadPostingContent() {
  const param = useParams();
  const project_idx = param.project_idx;
  const content_idx = param.content_idx;

  return(
    <div>
      {GetButtons(project_idx,content_idx)}
      {GetPostingContent(content_idx)}
    </div>
  )
}

export default ReadPostingContent;