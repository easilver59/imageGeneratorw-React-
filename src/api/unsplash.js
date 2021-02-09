import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3poluVdE0ufYQALkosrQKzS9uyHe6yhB-NaQ5zlstpk",
  },
});
