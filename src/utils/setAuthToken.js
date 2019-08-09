import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["usertoken"] = token;
  } else {
    delete axios.defaults.headers.common["usertoken"];
  }
};

export default setAuthToken;
