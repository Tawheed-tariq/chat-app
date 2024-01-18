import {Box, HStack, Stack, Text} from "@chakra-ui/react"
import UserIcon from "../../../components/userIcon"
import { useEffect, useState } from "react"


export default function Contacts({contacts , changeChat}) {

    const [currSelected , setCurrSelected] = useState(undefined)
    const [currUsername , setCurrUsername] = useState(undefined)


    
    useEffect(() => {
        const getCurrUser = async () => {
            const data = await JSON.parse(localStorage.getItem("chat-app-user"))
            setCurrUsername(() => (
                data.username
            ))
        }
        getCurrUser()
    }, [])

    const changeCurrChat = (index, contact) => {
        setCurrSelected(index)
        changeChat(contact)
    }

    return (
        <Box
            bg={'contacts'}
            display={'flex'}
            flexDir={'column'}
            alignItems={'flex-start'}
            maxW={'400px'}
            borderRadius={'20px'}
            p={'20px'}
            gap={'2'}
        >
            {
                contacts.map((contact, index) => (
                    <Stack 
                        onClick={() => (changeCurrChat(index, contact))} 
                        cursor={'pointer'} 
                        bg={currSelected === index ? 'secondary' : 'form' } 
                        px={'30px'} 
                        py={'15px'} 
                        borderRadius={'35px'} 
                        key={contact._id}
                    >
                        <HStack>
                            <UserIcon/>
                            <Stack
                                width={{
                                    base: '100px',
                                    sm: '150px'
                                }}
                                height={'40px'}
                                bg={'secondary'}
                                borderRadius={'37px'}
                                align={'center'}
                                justify={'center'}
                            >
                                <Text >
                                    {contact.username}
                                </Text>
                            </Stack>
                        </HStack>
                    </Stack>
                ))
            }
        </Box>
    )
}