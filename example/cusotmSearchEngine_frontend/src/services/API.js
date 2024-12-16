import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export default {
  post: {
    customsearch: ({ searchQuery }) => {
      return axios.post(`${API_BASE_URL}/api/search_engine`, { searchQuery });
    },
  },
};
