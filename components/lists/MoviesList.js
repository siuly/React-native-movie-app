import { FlatList, Text } from 'native-base'
import MovieCard from '../listItems/MovieCard'

const MoviesList = props => {
  const { navigation, movies } = props

  return (
    <>
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
          title={item.title}
          release_date={item.release_date}
          popularity={item.popularity}
          movieID={item.id}
          navigation={navigation}
        />
      )}
    />
   </>
  )
}

export default MoviesList
