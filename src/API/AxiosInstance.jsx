import axios from "axios";

//baseURL: `${protocol}//${hostname}:${portname}`
// baseURL: process.env.REACT_APP_API_BASE_URL,n
const AxiosInstance= ()=>{
const protocol= window.location.protocol;
const hostname=window.location.hostname;
const portname=8081;

const token = btoa(`${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`);
console.log(token)

const baseURL = window._env_?.API_BASE_URL;

if (!baseURL) {
    throw new Error("API_BASE_URL is missing in config.json");
  }

  return axios.create({
    baseURL: baseURL || `${protocol}//${hostname}:${portname}` || process.env.REACT_APP_API_BASE_URL,
    headers:{
        'Authorization': `Basic `+btoa(`${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`),
        Accept: 'application/json, application/pdf'
    }
});
} 

export default AxiosInstance;