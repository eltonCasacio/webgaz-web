import axios from "axios";

const api = axios.create({
  baseURL: "http://wj4mg.mocklab.io/",
});

export default api;