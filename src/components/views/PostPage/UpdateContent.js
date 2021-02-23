import React, { useState, useEffect, Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import store from '../../../_reducers/postingReducer';
import './UpdateContent.css';
import axios from 'axios';
import {request} from "../../../utils/axios"

//this.props.match.params

function UpdateContent(){
  const param = useParams();
  const project_idx = param.project_idx;
  const content_idx = param.content_idx;

  const [title,setTitle] = useState([]);
  const [content,setContent] = useState([]);

  useEffect(async()=>{
    var response = await axios.get('http://3.21.104.168:8765/posting/' + content_idx);
    const data = response.data[0];
    setTitle(data.title);
    setContent(data.content);
  },[])

  const onModify = () => {
   var updatedData = {title:title, content:content}

  const response = request("post", "/posting/update/" + content_idx , updatedData)
  console.log(response);
 }


return(
  <div>
    <article>
       <p>
          <input 
            id='title_txt' 
            type="text" 
            name="title" 
            defaultValue={title} 
             onChange={function(e){
              setTitle(e.target.value);
             }.bind(this)}>
          </input>
      </p>
      <div className="Write">
         <textarea 
           className='textarea' 
           name="content" 
           defaultValue={content}
          onChange={function(e){
            setContent(e.target.value);
          }.bind(this)}/>
       <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
      </div>
   </article>
   <Link to={"/project/"}><button style={{fontSize:30}} onClick={onModify}>수정하기</button></Link>
</div>)
}

  export default UpdateContent