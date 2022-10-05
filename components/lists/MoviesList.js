import { FlatList, Text } from 'native-base'
import MovieCard from '../listItems/MovieCard'

const MoviesList = props => {
  const { navigation, movies, categoryM, categoryT} = props
  let category = categoryM 
  if (categoryM === null || categoryM === 'movie') {
    category = categoryM
    
  }else{
    category = categoryT
  }
  return (
    <>
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
          title={item.title}
          title_tv={item.original_name}
          release_date={item.release_date}
          popularity={item.popularity}
          movieID={item.id}
          navigation={navigation}
          category = {category}
          media_type = {item.media_type}
        />
      )}
    />
   </>
  )
}

export default MoviesList
