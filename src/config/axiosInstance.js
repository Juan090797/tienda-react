import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://eakon.herokuapp.com/api'
});

export default axiosInstance;