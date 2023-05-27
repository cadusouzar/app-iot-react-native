import axios from "axios";

const api = axios.create({
  baseURL: "https://simiapi.azurewebsites.net/"
})

export default api