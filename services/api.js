import axios from "axios";
import qs from "qs";
import { API_KEY, BASE_URL } from "./api_config";


export const  getMovies = async (type) => {
  const url = `${BASE_URL}movie/${type}?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}

export const  getMovieDetail = async (MovieID) => {
  const url = `${BASE_URL}movie/${MovieID}?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}
