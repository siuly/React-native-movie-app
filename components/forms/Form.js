import React from 'react'
import { useState } from 'react'
import {Select, VStack, FormControl, CheckIcon} from 'native-base'

const Form = props => {

    const {  movieSetType } = props
  
  
    
    return(
    <VStack space={2} width='100%' py={5}>
        <FormControl isRequired>
            <Select minWidth="200" accessibilityLabel="Choose One" _selectedItem={{
        endIcon:<CheckIcon size="5" />
    }} mt={1} onValueChange={movieSetType}>
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Now Playing" value="now_playing" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
        </FormControl>

    </VStack>
    
    )
}

export default Form