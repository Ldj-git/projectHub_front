import axios from "axios";

const DOMAIN = "http://3.21.104.168:8765";

axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method: method,
    url: DOMAIN + url,
    data: data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
