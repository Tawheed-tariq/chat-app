import {Box} from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import Container from "../../components/container"
export default function Profile(){
    return(
        <Box
            width={'100vw'}
            height={'100vh'}
        >
            <Navbar/>
            <Box
                m={'10px'}
                minHeight={'calc(100vh - 80px)'}
                display={'flex'}
                alignItems={'center'}
                maxW={{
                    base: 'calc(100vw - 20px)',
                    sm: 'calc(100vw - 15vw)',
                    lg: 'calc(100vw - 30vw)'
                }}
                mx={'auto'}
            >
                <Container>
                    
                </Container>
            </Box>
        </Box>
    )
}