import {Box, HStack, Icon, Text, VStack} from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import Container from "../../components/container"
import About from "./components/About"
import ProfilePic from "./components/ProfilePic"
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from "react-router-dom"



export default function Profile(){
    const navigate = useNavigate()
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
                // alignItems={'center'}
                maxW={{
                    base: 'calc(100vw - 20px)',
                    sm: 'calc(100vw - 15vw)',
                    lg: 'calc(100vw - 30vw)'
                }}
                mx={'auto'}
            >
                <Container minheight={'calc(100vh - 100px)'} >
                    <VStack
                        width={{
                            base: '90%',
                            sm: '90%',
                            md: '700px'
                        }}
                        alignSelf={'center'}
                    >
                        <HStack
                            width={'100%'}
                            justifyContent={'center'}
                            position={'relative'}
                        >
                                <Icon 
                                    onClick={() => {navigate('/')}} 
                                    fontSize={{
                                        base: '24px',
                                        md: '34px'
                                    }} 
                                    position={'absolute'} 
                                    left={'0'} 
                                    cursor={'pointer'} 
                                    as={IoIosArrowBack}
                                />
                            <Text
                                fontSize={{
                                    base: '34px',
                                    md: '48px'
                                }}
                                fontWeight={'900'}
                            >
                                Your Profile
                            </Text>
                        </HStack>
                        <ProfilePic/>
                        <About/>
                    </VStack>
                </Container>
            </Box>
        </Box>
    )
}