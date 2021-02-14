import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import './ReadPostingContent.css';
import {request} from "../../../utils/axios"
import axios from 'axios';


function GetPostingContent(idx){
  const [currentContent,setContent] = useState([]);

  useEffect(async() => {
      var response = await axios.get('http://3.21.104.168:8765/posting/'+idx);
      setContent(response.data[0]);
    },[]);

    return (
      <div>
          <p><input id='title_txt' type="text" readOnly defaultValue={currentContent.title}></input></p>
            <ReactMarkdown source={currentContent.content} className='Readmarkdown'/>
      </div>
    )
}



function ReadPostingContent() {
  const param = useParams();
  const project_idx = param.project_idx;
  const content_idx = param.content_idx;

  return(
    <div>
      <Link to={"/project/" + project_idx + "/updateContent/" + content_idx}><button>수정</button></Link>
      <Link to="/project"><button onClick={function(){
        const response = request("get", "/posting/delete/" + content_idx);
        console.log(response);
      }}>삭제</button></Link>
      {GetPostingContent(content_idx)}
    </div>
  )
}

export default ReadPostingContent;