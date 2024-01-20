import { Box, HStack, Text } from "@chakra-ui/react";
import axios from 'axios'
import Welcome from "../../../components/welcome";
import { useEffect, useRef, useState } from "react";
import {recieveMessageRoute, sendMessageRoute} from '../../../utils/ApiRoutes'
import ChatInput from "./chatInput";
import ChatHeader from "./chatHeader";
import { v4 as uuidv4 } from "uuid";





export default function ChatContainer({currChat , socket}) {

    const [messages , setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const scrollRef = useRef()

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

    // useEffect(() => {
    //     const getCurrentChat = async () => {
    //       if (currentChat) {
    //         await JSON.parse(
    //           localStorage.getItem("chat-app-user")
    //         )._id;
    //       }
    //     };
    //     getCurrentChat();
    // }, [currChat]);

    const handleSend = async (msg) => {
        try {
            const user = await JSON.parse(localStorage.getItem("chat-app-user"))

            socket.current.emit('send-msg', { //sends message to other user
                to: currChat._id,
                from: user._id,
                msg
            })    

            await axios.post(sendMessageRoute, { //saves to database
                from: user._id,
                to: currChat._id,
                message: msg
            })   

            const msgs = [...messages];
            msgs.push({ fromSelf: true, message: msg });
            setMessages(msgs);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if(socket.current){
            socket.current.on("msg-recieve", (msg) => {
                setArrivalMessage({fromSelf: false, message : msg})
            })
        }
    }, [])

    useEffect(() => {
        arrivalMessage && setMessages(prev => [...prev , arrivalMessage])
    }, [arrivalMessage])


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

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
                <ChatHeader username={currChat.username}/>

                {/* Chat messages */}
                <Box
                    height={'500px'}
                    w={'90%'}
                    mx={'auto'}
                    overflow={'scroll'}
                    display={'flex'}
                    flexDir={'column'}
                >
                    {
                        messages.map((message, index) => {
                            return (
                                <HStack 
                                    className={message.fromSelf ? 'sended' : 'recieved'}
                                    m={'10px'} 
                                    px={'15px'} 
                                    py={'7px'} 
                                    borderRadius={'15px'} 
                                    maxW={'350px'} 
                                    bg={'msg'} 
                                    ref={scrollRef} 
                                    key={index}
                                >
                                    <Text >{message.message}</Text>
                                </HStack>
                            )
                        })
                    }
                    
                </Box>

                {/* chat input  */}
                <ChatInput handleSend={handleSend}/>
                </>
            }
        </Box>
    )
}
