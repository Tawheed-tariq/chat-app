import {Box} from "@chakra-ui/react"
import Navbar from '../../components/Navbar'
import Container from "../../components/container"
import Contacts from './componenets/contacts'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import {allUsersRoute} from "../../utils/ApiRoutes"




export default function Chat() {

    const navigate = useNavigate()
    const [currUsr, setCurrUsr] = useState()
    const [contacts, setContacts] = useState([])


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
                    <Contacts contacts={contacts}/>
                </Container>
            </Box>
        </Box>
    )
}