import axios from "axios";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://property-loader-server-7h51-dev.fl0.io/";

const axiosUrl = axios.create({ baseURL: baseUrl });

export default axiosUrl;
