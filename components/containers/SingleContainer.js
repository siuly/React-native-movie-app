import { Box, Button, Heading, Image, Text, VStack } from 'native-base'
import {useState, useEffect} from 'react'
import { getMovieDetail } from '../../services/api'

const SingleContainer = ({route, navigation}) => {

    const [details, setDetails] = useState({})

   const { itemId } = route.params
    
   useEffect(() =>{

    async function fetchData() {
      try{

        const movieDetails = await getMovieDetail(itemId)
        setDetails(movieDetails)
        
      }
      
      catch (error){
        throw error
      }
    }

    fetchData();

  },[])

  useEffect(()=>{
    console.log(JSON.stringify(details, null, 2))
  },[details])

        
    return(
        <>
        <Image alt={details.original_title}  source={{uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`}} borderRadius={5} size='lg' m={1}/>
        <Text> {details.original_title}</Text>
        <Text>{details.overview}</Text>
        </>
    )
}

export default SingleContainer


  
