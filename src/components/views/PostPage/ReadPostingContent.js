import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import store from '../../../_reducers/postingReducer';
import './ReadPostingContent.css';
import axios from 'axios';
import {request} from "../../../utils/axios"


function ReadPostingContent() {
  const param = useParams();
  const idx = param.idx;

  const getContent = () => {
    var i=0;
    var contents = store.getState().contents;
    while(i<contents.length)
    {
      if(Number(idx) === contents[i].idx){
        return contents[i];
      }
      i++;
    }
  }

  return(
    <div>
      <Link to={"/project/updateContent/" + idx}><button>수정</button></Link>
      <button onClick={function(){
        const response = request("get", "/posting/delete/" + idx);
        console.log(response);
      }}>삭제</button>
      <p><input id='title_txt' type="text" readOnly value={getContent().title}></input></p>
           <ReactMarkdown source={getContent().content} className='Readmarkdown'/>
    </div>
  )
}

export default ReadPostingContent;