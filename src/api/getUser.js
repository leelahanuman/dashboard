import axios from "axios";
import {url} from "../constants";
const getUserapi = async () => {
  console.log("2");
  const token = localStorage.getItem("token");

  const response = await axios({
    url: `${url}/auth/getuser`,
    method: "GET",
    headers: { "Content-Type": "application/json", authtoken: token },
  });
  console.log(response);
  return response.data;
};
export default getUserapi;
