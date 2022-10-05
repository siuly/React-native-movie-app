import { useEffect, useState } from 'react'
import { Center, Container } from 'native-base'
import { getMovies,getTV } from '../../services/api'
import MovieForm from '../forms/Form'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'
import TVForm from '../forms/TVForm'

const MoviesListContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [movieType, setMovieType] =useState('popular')
  const [movies, setMovies] =useState({})

  const categoryM = 'movie';
 
  useEffect(() =>{

    async function fetchData() {
      try{

      const movie = await getMovies(movieType)
      setMovies(movie.results)
      
      }
      
      catch (error){
        throw error
      }
    }

    fetchData();

  },[movieType])

  // useEffect(()=>{
  //   console.log(JSON.stringify(movies, null, 2))
  // },[movies])

  return (
    <Container>
      <Center px={4}>
        <MovieForm movieSetType = {setMovieType}/> 
         {isLoading ? <Loading /> : <MoviesList movies={movies} navigation={navigation} categoryM={categoryM}/>}
      </Center>
    </Container>
  )
}

export default MoviesListContainer


  

  // const fetchMovies = async movieType =>{
  //   const url = `https://api.themoviedb.org/3/movie/${movieType}?api_key=c47fd321db0eaeaf182c2d1b76072fde`
  //   const apiCall = await fetch(url)

  //   const response = await apiCall.json()

  //   console.log('response', response)
  //   setMovies(response.results)
  // }

  
  // const fetchRecipes = () => {
  //   setRecipes([
  //     {
  //       image:
  //         'https://edamam-product-images.s3.amazonaws.com/web-img/889/88989a61c8c566b8d29ed6b982fb06d8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCSqdLowove6WHFm4fZrpHEqvC9zKIyL13uthe0q5kyMgIgb7y6DuPrWM6T70sp1ZOG%2B%2FSz5uAA%2BDMWlS%2BW8FcRTFwq1QQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDJUObaxB15NSUzFLRCqpBHFkDBUoGJBVM0rEA0OoXtOlorWKlCCyG4Yz6yb%2FcBl2J7f%2FvuZFbPHU3ZQ%2FtpSQ7kdhaHYCXCoErQ90DSfl1cFaIc%2F4p91F%2BT%2FdzJQBe8gWz6biPyguR8hE0NalAn9IT5jejXSU06MuZOchPmUR44XisVITH%2BhK2jZeRiOSJB6Va0T10ChYyLb%2BCMAiiMiEZbki%2FO1Y0psAPG8avIYCTLXDlS00nCjFVBrPby4mDhzIrtP1sx8clprUyC955rjp0%2F8WGpE5NxxMXNh8TNihB5hDpu7IPmaoWabYkBOBaV3j%2BeBNnF54oc5OiBPjIHVwxRGSHiIJzcnb%2BInaIPUOUHC%2BC8qH%2FzH4cT2kXTpJDNx15XUdOaBeAAoqkgoQwiB3FDoplMrYpKeFHH3fHUfIcvfGc4vcLGjkXOieI9qwxV7phvwF5PnscCjWW2MDI7hw9IabWwjGjifS1CJfEnCBgyjj12kGOQvPlfc6RPOO7w4MoB3XZ4Bu6ISxT1vgJ5bjuUSa6%2Ffp2xaieJmseai2q2NCmbu78DtuKIjCNE8dDGYFEG2356cgdEMltLfbbRpx5FDwj0%2FOcOcm3aR708tUqugNhhh8DkilpTMWtHLu5mTD54ue93pdcARxgcrx0HkqsENl6LxGfRa7gg5NFGauW5luOcd%2F1gIQIQjh0sIle6FwUBaFYslmY4pxmnzo854xRHnCfHDkw%2FF5rlin1WFd0AD7S9wcd8%2Fz5asw%2FuiymQY6qQFIXkGOZ7qIRaMZ5UEeJM%2BdD8BTrgAJTDsAXaEZiUboYu0v%2Fi7shmqqekBj0cIehcjtQilHus2uqg2n%2Bun%2BIcp49myR0gt26fi4lNPlA9wMex%2FzAkJ9wWzBvVXwVF9fVr2bTBNW1cbqeZDgicoCg1Lj78OGxb%2FgnP7KcBty4%2FnKW0qE8j57NlHVoBL2HM6N%2BOUz%2FnQs%2BYxarYLWgtc7zjTc2T%2FPO%2FvB2wwu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220922T201930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAUJHLCXK%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b610ea26e44325d1ca2094a5b4fc92abe4d317a5ef385cea0d548ef02837a585',
  //       label: 'Roast sirloin of beef',
  //       source: 'BBC Good Food',
  //       uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_62ebc9d43ec31eace0c035db993eb1f5'
  //     },
  //     {
  //       image:
  //         'https://edamam-product-images.s3.amazonaws.com/web-img/ad3/ad35ae4c847dcd39bad104838007f84a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCSqdLowove6WHFm4fZrpHEqvC9zKIyL13uthe0q5kyMgIgb7y6DuPrWM6T70sp1ZOG%2B%2FSz5uAA%2BDMWlS%2BW8FcRTFwq1QQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDJUObaxB15NSUzFLRCqpBHFkDBUoGJBVM0rEA0OoXtOlorWKlCCyG4Yz6yb%2FcBl2J7f%2FvuZFbPHU3ZQ%2FtpSQ7kdhaHYCXCoErQ90DSfl1cFaIc%2F4p91F%2BT%2FdzJQBe8gWz6biPyguR8hE0NalAn9IT5jejXSU06MuZOchPmUR44XisVITH%2BhK2jZeRiOSJB6Va0T10ChYyLb%2BCMAiiMiEZbki%2FO1Y0psAPG8avIYCTLXDlS00nCjFVBrPby4mDhzIrtP1sx8clprUyC955rjp0%2F8WGpE5NxxMXNh8TNihB5hDpu7IPmaoWabYkBOBaV3j%2BeBNnF54oc5OiBPjIHVwxRGSHiIJzcnb%2BInaIPUOUHC%2BC8qH%2FzH4cT2kXTpJDNx15XUdOaBeAAoqkgoQwiB3FDoplMrYpKeFHH3fHUfIcvfGc4vcLGjkXOieI9qwxV7phvwF5PnscCjWW2MDI7hw9IabWwjGjifS1CJfEnCBgyjj12kGOQvPlfc6RPOO7w4MoB3XZ4Bu6ISxT1vgJ5bjuUSa6%2Ffp2xaieJmseai2q2NCmbu78DtuKIjCNE8dDGYFEG2356cgdEMltLfbbRpx5FDwj0%2FOcOcm3aR708tUqugNhhh8DkilpTMWtHLu5mTD54ue93pdcARxgcrx0HkqsENl6LxGfRa7gg5NFGauW5luOcd%2F1gIQIQjh0sIle6FwUBaFYslmY4pxmnzo854xRHnCfHDkw%2FF5rlin1WFd0AD7S9wcd8%2Fz5asw%2FuiymQY6qQFIXkGOZ7qIRaMZ5UEeJM%2BdD8BTrgAJTDsAXaEZiUboYu0v%2Fi7shmqqekBj0cIehcjtQilHus2uqg2n%2Bun%2BIcp49myR0gt26fi4lNPlA9wMex%2FzAkJ9wWzBvVXwVF9fVr2bTBNW1cbqeZDgicoCg1Lj78OGxb%2FgnP7KcBty4%2FnKW0qE8j57NlHVoBL2HM6N%2BOUz%2FnQs%2BYxarYLWgtc7zjTc2T%2FPO%2FvB2wwu&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220922T201930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAUJHLCXK%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5ae1b5e48e3cdb4d4f3f3e8d706313c665405be699ef83cdb5e33ebbc59906e7',
  //       label: 'Beef Tea',
  //       source: 'Epicurious',
  //       uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_0f3a359371750f372c7ac3c1459751d9'
  //     }
  //   ])
  //   // getMovies(ingredient).then(recipes => {
  //   //   setRecipes(recipes)
  //   // })
  // }