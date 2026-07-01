import axios from "axios";

const AxiosInstance = () => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const portname = 8081;

  // 1. Determine the baseURL using an ordered fallback chain
  const baseURL = 
    window._env_?.API_BASE_URL || 
    process.env.REACT_APP_API_BASE_URL || 
    `${protocol}//${hostname}:${portname}`;

  // Log it to your console so you can see exactly where the frontend is pointing
  console.log("Axios connected to baseURL:", baseURL);

  return axios.create({
    baseURL: baseURL,
    headers: {
      'Authorization': `Basic ` + btoa(`${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`),
      'Accept': 'application/json, application/pdf'
    }
  });
};

export default AxiosInstance;