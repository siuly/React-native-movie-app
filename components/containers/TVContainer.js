import { useEffect, useState } from 'react'
import { Center, Container } from 'native-base'
import { getMovies,getTV } from '../../services/api'
import MovieForm from '../forms/Form'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'
import TVForm from '../forms/TVForm'

const TVContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] =useState({})
  const [tvType, setTVType] =useState('popular')
  const [tvShows, setTVShows] =useState({})

  const categoryT = 'tv';
 
  useEffect(() =>{

    async function fetchData() {
      try{

      const show = await getTV(tvType)
      setTVShows(show.results)
      }
      
      catch (error){
        throw error
      }
    }

    fetchData();

  },[tvType])

//   useEffect(()=>{
//     console.log(JSON.stringify(movies, null, 2))
//   },[movies])

  return (
    <Container>
      <Center px={4}>
        <TVForm tvSetType = {setTVType} tvType={tvType}/>
        {/* tvShows = {movies} this  is how  we pass props  between files  */}
        {isLoading ? <Loading /> : <MoviesList movies={tvShows}  navigation={navigation} categoryT={categoryT}/>}
      </Center>
    </Container>
  )
}

export default TVContainer
