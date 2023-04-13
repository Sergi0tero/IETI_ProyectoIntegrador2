import { Center, Button, ChakraProvider, Flex, Heading, Divider} from '@chakra-ui/react'

const Header = () => {
    return <Flex>
        <Heading fontSize="40px" fontFamily="sans-serif">Todo App</Heading>
        <Center>
            <Divider orientation='vertical'/>
        </Center>
    </Flex>
}
export default Header;