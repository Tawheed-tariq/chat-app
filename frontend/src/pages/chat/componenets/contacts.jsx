import {Box, HStack, Stack, Text, useDisclosure, Drawer, DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Button,} from "@chakra-ui/react"
import UserIcon from "../../../components/userIcon"
import { useEffect, useRef, useState } from "react"


export default function Contacts({contacts , changeChat}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const [currSelected , setCurrSelected] = useState(undefined)
    const [currUsername , setCurrUsername] = useState(undefined)


    //gets the data of current user
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
        <>

        {/* here rendering this when is desktop and rendering the drawer when in mobile or tablet */}
            <Box
                bg={'contacts'}
                display={{
                    base: 'none',
                    md: 'flex'
                }}
                flexDir={'column'}
                alignItems={'flex-start'}
                maxW={'450px'}
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
                            width={{
                                base: '100%'
                            }}
                        >
                            <HStack
                                width={{
                                    base: '100%'
                                }}
                            >
                                <UserIcon/>
                                <Stack
                                    width={{
                                        base: 'calc(100% - 50px)',
                                        // md: '150px'
                                    }}
                                    height={'40px'}
                                    bg={'secondary'}
                                    borderRadius={'37px'}
                                    align={'flex-start'}
                                    justify={'center'}
                                    px={'20px'}
                                >
                                    <Text
                                        noOfLines={1}
                                    >
                                        {contact.username}
                                    </Text>
                                </Stack>
                            </HStack>
                        </Stack>
                    ))
                }
            </Box>

            <Button display={{base: 'block' , md: 'none'}} height={'40px'} ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Contacts
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    bg={'secondary'}
                    width={'100%'}
                    display={{
                        base: 'block',
                        md: 'none'
                    }}
                >
                <DrawerCloseButton />
                <DrawerHeader color={'txt'}>contacts</DrawerHeader>
    
                <DrawerBody>
                    <Box
                        bg={'contacts'}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-start'}
                        width={'100%'}
                        height={'100%'}
                        borderRadius={'20px'}
                        p={'20px'}
                        gap={'2'}
                    >
                        {
                            contacts.map((contact, index) => (
                                <Stack 
                                    onClick={() => (changeCurrChat(index, contact) ,onClose())} 
                                    cursor={'pointer'} 
                                    bg={currSelected === index ? 'secondary' : 'form' } 
                                    px={'30px'} 
                                    py={'15px'} 
                                    borderRadius={'35px'} 
                                    key={contact._id}
                                    width={{
                                        base: '100%'
                                    }}
                                >
                                    <HStack
                                        width={{
                                            base: '100%'
                                        }}
                                    >
                                        <UserIcon/>
                                        <Stack
                                            width={{
                                                base: 'calc(100% - 50px)',
                                                // md: '150px'
                                            }}
                                            height={'40px'}
                                            bg={'secondary'}
                                            borderRadius={'37px'}
                                            align={'flex-start'}
                                            justify={'center'}
                                            px={'20px'}
                                        >
                                            <Text
                                                width={'100%'}
                                                isTruncated = {true}
                                                // noOfLines={1}
                                            >
                                                {contact.username}
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </Stack>
                            ))
                        }
                    </Box>
                </DrawerBody>
    
                </DrawerContent>
            </Drawer>
        </>
    )
}