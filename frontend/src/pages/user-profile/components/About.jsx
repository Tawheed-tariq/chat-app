import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {FiEdit3} from "react-icons/fi"



const Info = ({header, headerInfo, fontSize}) => {
    return( 
        <Box
            width={'500px'}
        >
            <Text color={'primary'}>{header}</Text>
            <HStack
                width={'100%'}
                justifyContent={'space-between'}
            >
                <Text fontSize={fontSize}>{headerInfo}</Text>
                <Icon cursor={'pointer'} alignSelf={'flex-end'} textColor={'primary'} as={FiEdit3}/>
            </HStack>
        </Box>
    )
}


export default function About(){
    const [details , setDetails]  = useState({})
    useEffect(() => {
        const getUserInfo = async () => {
            const data = await JSON.parse(localStorage.getItem('chat-app-user'))
            setDetails(prev => prev = data)
        }
        getUserInfo()
    }, [])

    
    return (
        <VStack spacing={'4'}>
            <Info header="Username" headerInfo={details.username} fontSize={'32px'} />
            <Info header={'Email'} headerInfo={details.email} fontSize={'24px'} />
            <Info header={'Bio'} headerInfo={'A developer with passion of technology and creativity'} fontSize={'18px'} />
        </VStack>
    )
}

