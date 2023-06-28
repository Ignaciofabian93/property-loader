import axios from "axios";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://property-loader-server.vercel.app";

const axiosUrl = axios.create({ baseURL: baseUrl });

export default axiosUrl;
