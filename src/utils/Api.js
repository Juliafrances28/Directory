import axios from "axios";

//eslint-disable-next-line import/no-anonymous-default-export

//Export an object containing methods we'll use for accessing the Random user API

export default {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
