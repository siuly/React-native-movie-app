import React from 'react'
import { useState } from 'react'
import {Select, VStack, FormControl, CheckIcon} from 'native-base'

const TVForm = props => {

    const {  tvSetType } = props
    
    return(
    <VStack space={2} width='100%' py={5}>
        <FormControl isRequired>
            <Select minWidth="200" accessibilityLabel="Choose One" _selectedItem={{
        endIcon:<CheckIcon size="5" />
    }} mt={1} onValueChange={tvSetType}>
          <Select.Item label="Airing Today" value="airing_today" />
          <Select.Item label="On the air" value="on_the_air" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
        </Select>
        </FormControl>

    </VStack>
    
    )
}

export default TVForm