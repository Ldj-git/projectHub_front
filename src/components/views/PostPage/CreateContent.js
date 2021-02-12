import React, {useState} from 'react'
import {  useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';
import './CreateContent.css';
import postingStore from '../../../_reducers/postingReducer';
import {request} from "../../../utils/axios"

function CreateContent(){

  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");    

    const onUpload =  async () => {
      var newMaxContentId = postingStore.getState().max_content_id + 1;
      var _contents = Array.from(postingStore.getState().contents);
      _contents.push({
        idx:newMaxContentId, 
        projex_idx:1, 
        title:title, 
        content:desc,
        updateDate:null,
        user_id:"test",
        addDate: "2021-02-06T16:54:17.000Z",
      })
      postingStore.dispatch({type:'CompletePostingContent', _contents})
    
        const obj = {
          addDate: "2021-02-06T16:54:17.000Z",
          content:desc,
          idx:newMaxContentId, 
          project_idx:1, 
          title:title, 
          updateDate:null,
          user_id:"test",
          withCredentials: true
          };

          const rresponse = request("post", "/posting/upload", obj);
        console.log(rresponse);
    }

    const handleChangeTITLE = (e) => {
      setTitle(e.currentTarget.value)
    }
  
    const handleChangeDESC = (e) => {
      setDesc(e.currentTarget.value)
    }
  
      return (
        <article>
            <p><input id='title_txt' type="text" name="title" placeholder="title 입력" onChange={handleChangeTITLE}></input></p>
            <div className="Write">
              <textarea 
                autoFocus 
                className='textarea' 
                name="desc" 
                placeholder="desc 입력" 
                onChange={handleChangeDESC}/>
            
            <ReactMarkdown source={desc} className='markdown'/>
            </div>
              <Link to="/project"><button style={{fontSize:40}} onClick={onUpload}>만들기</button></Link>
        </article>
      )
    }

  export default CreateContent