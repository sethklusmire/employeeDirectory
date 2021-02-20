import axios from "axios";

const empAPI = "https://randomuser.me/api/?results=50";

export default {
  getEmployees: () => {
    return axios.get(empAPI);
  },
};