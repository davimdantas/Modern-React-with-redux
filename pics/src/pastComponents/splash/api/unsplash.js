import axios from "axios";

// const searchImage = () => {};

const api = "https://api.unsplash.com";
const api_key =
  "99023fc8900e7478d1c3929686384d48cd9370df95616daf325b2b945e611bfc";

export default axios.create({
  baseURL: api,
  headers: {
    Authorization: "Client-ID " + api_key
  }
});
