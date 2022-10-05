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

export const  getDetail = async (category, typeID) => {
  const url = `${BASE_URL}${category}/${typeID}?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}
/**
 * It takes a type as an argument, and returns the data from the API call.
 * @param type - popular, top_rated, airing_today, on_the_air
 * @returns The data from the API call.
 */
export const  getTV = async (type) => {
  const url = `${BASE_URL}tv/${type}?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}
export const  getTVDetail = async (TVID) => {
  const url = `${BASE_URL}tv/${TVID}?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}

export const  getMovieSearch = async (type, query) => {
  const url = `${BASE_URL}search/${type}?api_key=${API_KEY}&query=${query}`
  try {
    const response = await axios.get(url)
    return response.data
    
  } catch (error) {
    throw error
  }
}
