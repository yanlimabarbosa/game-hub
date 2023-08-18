import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4897866f069f44d09fe8349d0c6dcbd2"
  }
})
