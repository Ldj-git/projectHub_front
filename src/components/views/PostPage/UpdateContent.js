import React, { useState, useEffect, Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link, useParams} from 'react-router-dom';
import store from '../../../_reducers/postingReducer';
import './UpdateContent.css';
import axios from 'axios';
import {request} from "../../../utils/axios"

//this.props.match.params

export default class UpdateContent extends Component {
  constructor(props)
  {
    super(props);
    const getIdx = () => {
      var i=0;
      while(i<store.getState().contents.length){
        if(Number(this.props.match.params.idx) === store.getState().contents[i].idx){
          return i;
        }
        i++;
      }
    }

    this.state = {
    content_idx:getIdx(),
    idx:store.getState().contents[getIdx()].idx,
    title:store.getState().contents[getIdx()].title,
    content:store.getState().contents[getIdx()].content,
    }
  }

    render(){
      const onModify = () => {
        var updatedData = {title:this.state.title, content:this.state.content}

        const response = request("post", "/posting/update/" + this.state.idx , updatedData)
        console.log(response);
      }

      return(
        <div>
          <article>
            <input type="hidden" name="id" value={this.state.idx}></input>
            <p>
               <input 
                  id='title_txt' 
                  type="text" 
                  name="title" 
                  value={this.state.title} 
                  onChange={function(e){
                    this.setState({
                      [e.target.name]:e.target.value
                    })
                  }.bind(this)}>
                </input>
            </p>
            <div className="Write">
              <textarea 
                className='textarea' 
                name="content" 
                value={this.state.content}
                onChange={function(e){
                  this.setState({
                    [e.target.name]:e.target.value
                  })
                }.bind(this)}/>
             <ReactMarkdown source={this.state.content} className='markdown'/>
            </div>
        </article>
        <button style={{fontSize:30}} onClick={onModify}>수정하기</button>
      </div>
      )
    }
  }