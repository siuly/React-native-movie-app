import { Box, Button, Heading, Image, Text, VStack } from 'native-base'

const MovieCard = props => {
  const { image, title,title_tv, navigation,media_type, popularity, release_date, overview, movieID, category } = props
  // console.log(category)
  return (
   
      <VStack >
        <Box display={'flex'} flexDirection={'row'}>
        <Box>
          <Image alt={'image'} source={{uri: image}} borderRadius={5} size='lg' m={1}/>
        </Box>
        <Box px={2} py={2}>
          <Heading fontSize={'sm'}>{title === undefined ? title_tv : title}</Heading>
          <Text fontSize={'xs'}>Popularity: {popularity}</Text>
          <Text fontSize={'xs'}>Release Date: {release_date}</Text>
          <Button  fontWeight={'bold'} fontSize={'xs'} backgroundColor={'lightBlue.400'} width={'80%'} height={8} padding={1}
            onPress={() => {
              navigation.navigate('Details', {
                itemId: movieID,
                category: category,
                media_type: media_type,
              })
            }}
          >
            More Details
          </Button>
        </Box>
        </Box>
      </VStack>
  )
}
export default MovieCard
