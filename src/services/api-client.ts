import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b3a845f339c74980b9962674cdac217a"
  }
})


