import React, {useState, useEffect} from 'react'
import {  useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import './CreateContent.css';
import {request} from "../../../utils/axios"
import {getAllPosting} from "../../../_actions/projectAction";


function CreateContent(){
  const param = useParams();
  const project_idx = param.project_idx;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const[contents, setContents] = useState([]);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllPosting()).then((res) => {
      setContents(res.payload);
    });
    setLoading(false);
  }, []);

  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");    

  const getMaxIdx = () => {
    var max = -1;
    var i=0;
    while(i<contents.length){
      if(max < contents[i].idx) max = contents[i].idx;
      i++;
    }
    return max;
  }

    const onUpload = () => {
      var newMaxContentId = getMaxIdx() + 1;

      const obj = {
        addDate: "2021-02-06T16:54:17.000Z",
        content:desc,
        idx:newMaxContentId, 
        project_idx:Number(project_idx), 
        title:title, 
        updateDate:null,
        user_id:"test",
        withCredentials: true
        };

      const rresponse = request("post", "/posting/upload/", obj);
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
              <Link to={"/project/"}><button style={{fontSize:40}} onClick={onUpload}>만들기</button></Link>
        </article>
      )
    }

  export default CreateContent