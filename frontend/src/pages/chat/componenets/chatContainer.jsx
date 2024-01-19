import { Box, HStack,  Stack, Text } from "@chakra-ui/react";
import UserIcon from "../../../components/userIcon";
import axios from 'axios'
import Welcome from "../../../components/welcome";
import { useEffect, useState } from "react";
import {recieveMessageRoute, sendMessageRoute} from '../../../utils/ApiRoutes'
import ChatInput from "./chatInput";





export default function ChatContainer({currChat , socket}) {

    const [messages , setMessages] = useState([]);



    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const user = await JSON.parse(localStorage.getItem("chat-app-user")) //get the data of sender
                if(currChat != undefined){
                    const response  = await axios.post(recieveMessageRoute, { //sends req to database to get all the message present in database
                        from : user._id,
                        to: currChat._id
                    })
                    setMessages(response.data)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllMessages()
    }, [currChat])

    const handleSend = async (msg) => {
        try {
            const user = await JSON.parse(localStorage.getItem("chat-app-user"))

            socket.current.emit('send-msg', { //sends message to other user
                to: currChat._id,
                from: user._id,
                msg
            })    

            const {data} = await axios.post(sendMessageRoute, { //saves to database
                from: user._id,
                to: currChat._id,
                message: msg
            })   

            console.log("done " + data.msg)     
            const msgs = [...messages];
            msgs.push({ fromSelf: true, message: msg });
            setMessages(msgs);
        } catch (error) {
            console.log(error.message)
        }
    }


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
                {/* header */}
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

                {/* Chat messages */}
                <Box
                    height={'100%'}
                    w={'90%'}
                    mx={'auto'}
                >
                    
                </Box>

                {/* chat input  */}
                <ChatInput handleSend={handleSend}/>
                </>
            }
        </Box>
    )
}
