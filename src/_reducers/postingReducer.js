import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined) {
        return {
            max_content_id:2,
            contents:[],
        }
    } 
      
    if(action.type === 'CompletePostingContent'){
        return {
            ...state,
            contents:action._contents,
            max_content_id:action.newMaxContentId,
        }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)