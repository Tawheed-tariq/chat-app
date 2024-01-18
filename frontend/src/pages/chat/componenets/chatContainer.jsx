import { Box, HStack, Icon, Stack, Text, Textarea } from "@chakra-ui/react";
import UserIcon from "../../../components/userIcon";
import {MdOutlineSend} from 'react-icons/md'
import Welcome from "../../../components/welcome";
export default function ChatContainer({currChat }) {
    // const [currUser , setCurrUser] = useState(undefined)



    // useEffect(() => {
    //     const getCurrUser = async () => {
    //         const data = await JSON.parse(localStorage.getItem("chat-app-user"))
    //         setCurrUser(() => (
    //             data.username
    //         ))
    //     }
    //     getCurrUser()
    // }, [])



    return (
        <Box
            minH={'680px'}
            bg={'chat'}
            w={'100%'}
            alignItems={'flex-start'}
            display={'flex'}
            flexDir={'column'}
            px={'5'}
            py={'3'}
            borderRadius={'25px'}
            justifyContent={'space-between'}
        >

            {currChat === undefined ? 
                <Welcome />
                : 
                <>
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
                            {currChat.username}
                        </Text>
                    </Stack>
                </HStack>

                <Box
                    height={'100%'}
                >

                </Box>


                <HStack w={'100%'}>
                    <Box>
                        <UserIcon/>
                    </Box>
                    <Textarea w={'100%'} border={'none'} height={'50px'} color={'txt'} borderRadius={'25px'} bg={'input'} px={'4'} fontSize={'18px'} rows={1}></Textarea>
                    <Stack
                        height={'40px'}
                        borderRadius={'20px'}
                        bg={'secondary'}
                        width={'80px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Icon as={MdOutlineSend}/>
                    </Stack>
                </HStack>
                </>
            }
        </Box>
    )
}