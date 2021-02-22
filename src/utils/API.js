import axios from "axios";
// cap it at 50
const empAPI = "https://randomuser.me/api/?results=50";

export default {
  getEmployees: () => {
    return axios.get(empAPI);
  },
};