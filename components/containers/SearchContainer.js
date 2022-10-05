import { useEffect, useState } from 'react'
import { Center, Container } from 'native-base'
import { getMovies,getMovieSearch,getTV } from '../../services/api'
import Loading from '../layout/Loading'
import SearchForm from '../forms/SearchForm'
import MoviesList from '../lists/MoviesList'


const SearchContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType]=useState('multi')
  const [movies, setMovies]=useState({})
  const [query, setQuery]=useState('')


const fetchData = async() =>{
    try {
        const data = await getMovieSearch(type, query)
        setMovies(data.results)
        console.log(type)
    } catch (error) {
        throw error
        
    }
}


  return (
    <Container>
      <Center px={2}>
        <SearchForm setQuery={setQuery} setType={setType} fetchData={fetchData}/>
        {isLoading ? <Loading /> : <MoviesList movies={movies} navigation={navigation} />}
      </Center>
    </Container>
  )
}

export default SearchContainer