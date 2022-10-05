import { Box, Button, Center, Heading, Image, Text, HStack, VStack } from 'native-base'
import {useState, useEffect} from 'react'
import { getDetail } from '../../services/api'

const SingleContainer = ({route, navigation}) => {

    const [details, setDetails] = useState({})

   const { itemId, category, media_type } = route.params


  useEffect(() =>{

    async function fetchData() {
      try{
        let categoryType = category 
        if (category === 'tv'|| category === undefined) {
          categoryType = 'tv'
        }
        else if (category === 'movie' ) {
          categoryType = 'movie'
          
        }
        console.log(`category: ${category} categoryType: ${categoryType} mediaType ${media_type}`)
        const TVDetails = await getDetail(categoryType, itemId)
       
        
        setDetails(TVDetails) 

      }
      catch (error){
        throw error
      }
    }

    fetchData();

  },[])

  // useEffect(()=>{
  //   console.log(JSON.stringify(details, null, 2))
  // },[details])

        
    return(
        <>
        <VStack m={2}>
        <Center>
        <Text bold fontSize={'lg'} mb={10} mt={10}> {details.original_title === undefined ? details.original_name : details.original_title }</Text>
        <Image alt={'image'}  source={{uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`}} borderRadius={5} size='2xl' m={1}/>
        <Text fontSize={'xs'} ml={5} mr={5} mt={2} mb={2}>{details.overview}</Text>
        <HStack >
          <Text fontSize={'xs'}>Popularity: {details.popularity} | </Text>
          <Text fontSize={'xs'}>Release Date: {details.release_date}</Text>
        </HStack>
        </Center>
        </VStack>
        </>
    )
}

export default SingleContainer


  
