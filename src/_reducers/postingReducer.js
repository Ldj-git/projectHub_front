import { createStore } from "redux";

export default createStore(function (state, action) {
  if (state === undefined) {
    return {
      max_content_id: 0,
      contents: [],
    };
  }

  if (action.type === "StoreContents") {
    return {
      ...state,
      contents: action._contents,
      max_content_id: action.newMaxContentId,
    };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
