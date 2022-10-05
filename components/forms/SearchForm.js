import React from 'react'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon, Box, ChevronLeftIcon, SearchIcon } from 'native-base'

const SearchForm = props => {
  const { setType, setQuery, fetchData} = props

 const onSubmit = () =>{
    fetchData();
 }
  
  return (
    <VStack space={2} width='100%' py={5} >
        <FormControl isRequired>
            <Box width='100%'>
                <FormControl.Label>Movie Title</FormControl.Label>
                <Input 
                    placeholder='i.e. James Bond, CSI'
                    variant='filled' 
                    bg='gray.200'
                    width='95%'
                    px={3}
                    onChangeText={setQuery}
                    InputLeftElement={
                        <SearchIcon size={5} ml={2} color={'#fff'} />
                    }/>
                <FormControl.ErrorMessage>
                    Please fill in the input form!
                </FormControl.ErrorMessage>
            </Box>
        </FormControl>

        <FormControl isRequired>
            <FormControl.Label>Choose Search Type</FormControl.Label>
            <HStack width='100%' space={2}>
                <Select 
                    minWidth="240" 
                    accessibilityLabel="Choose Service" 
                    placeholder="Choose Service" 
                    _selectedItem={{
                        bg: "teal.600",
                        color: '#fff',
                        endIcon: <CheckIcon size={5} color='#fff' />
                    }} 
                    mt={1} 
                    onValueChange={setType}>
                    <Select.Item label="movie" value="movie" />
                    <Select.Item label="multi" value="multi" />
                    <Select.Item label="tv" value="tv" />
                    </Select>
                    
                    <Button
                        style={{backgroundColor: '#06b6d4' }}
                        onPress={onSubmit}
                        leftIcon={
                            <SearchIcon size={5} ml={2} color={'#fff'} />
                        }
                    >Search</Button>
            </HStack>
            <FormControl.HelperText>
                Please select a search type
            </FormControl.HelperText>
        </FormControl>
    </VStack>
)
}

export default SearchForm