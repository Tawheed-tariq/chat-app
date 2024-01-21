import {Box, useMediaQuery} from "@chakra-ui/react"
import Navbar from '../../components/Navbar'
import Container from "../../components/container"
import Contacts from './componenets/contacts'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import {allUsersRoute, host} from "../../utils/ApiRoutes"
import ChatContainer from "./componenets/chatContainer"
import {io} from 'socket.io-client'



export default function Chat() {

    const navigate = useNavigate()
    const [currUsr, setCurrUsr] = useState()
    const [contacts, setContacts] = useState([])
    const [currChat , setCurrChat] = useState(undefined)
    const socket = useRef() //useRef is a React Hook that lets you reference a value that’s not needed for rendering.


    //every time somone registers or comes to this chat section this hook joins the user to the socket
    useEffect(() => {
        if(currUsr){
            socket.current = io(host) //connects to server
            socket.current.emit('add-user', currUsr._id)
        }
    }, [currUsr])



    //gets the data of the current user
    useEffect(() => {
        const getUser = async () => {
            try {
                if(!localStorage.getItem('chat-app-user')){
                    navigate('/login')
                }else{
                    setCurrUsr(
                        await JSON.parse(localStorage.getItem("chat-app-user"))
                    )
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getUser()
    }, [])


    //gets all the contacts present in the database
    useEffect(() => {
        const getContacts = async () => {
            try {
                if(currUsr){
                    const {data} = await axios.get(`${allUsersRoute}/${currUsr._id}`)
                    setContacts(data)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getContacts()
    }, [currUsr])


    
    const handleChatChange = (chat) => {
        setCurrChat(chat);
    };
    return (
        <Box
            width={'100vw'}
            height={'100vh'}
        >
            <Navbar/>
            <Box
                m={'10px'}
                minHeight={'calc(100% - 80px)'}
                display={'flex'}
                alignItems={'center'}
                maxW={{
                    base: 'calc(100% - 20px)',
                    sm: 'calc(100vw - 15vw)',
                    lg: 'calc(100vw - 30vw)'
                }}
                mx={'auto'}
            >
                <Container>
                    <Contacts contacts={contacts} changeChat={handleChatChange} />
                    <ChatContainer currChat={currChat} socket={socket} />
                </Container>
            </Box>
        </Box>
    )
}