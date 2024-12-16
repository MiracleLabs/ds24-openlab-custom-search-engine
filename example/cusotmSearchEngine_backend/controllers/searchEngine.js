import axios from "axios";
import 'dotenv/config'
export const custom_search_engine = async (req, res) => {
  try {
    const { searchQuery } = req.body;
    console.log('searchQuery',searchQuery)
    let apiKey = process.env.GOOGLE_API_KEY;
    const response = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          key: apiKey, // Your API key
          cx: process.env.SEARCH_ENGINEID, // Your Search engine Id
          q: searchQuery // The search query
        }
      }
    );
    console.log("response.data", response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error?.response?.message || "Internal server error" });
  }
};
