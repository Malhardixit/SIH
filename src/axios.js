import axios from "axios";

const instance = axios.create({
  baseURL: "https://sihpaymentapis.herokuapp.com",
});

export default instance;
