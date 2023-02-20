import axios from "axios";

export default axios.create({
  baseURL: "https://cesium-material-project-default-rtdb.firebaseio.com/",
});
