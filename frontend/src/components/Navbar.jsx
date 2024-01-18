import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import UserIcon from './userIcon'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { logoutRoute } from "../utils/ApiRoutes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Navbar(){
    const navigate = useNavigate()

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleClick = async () => {
        try {
            const id = await JSON.parse(localStorage.getItem("chat-app-user"))._id
            const data = await axios.get(`${logoutRoute}/${id}`)
            if(data.status === 200){
                localStorage.clear()
                navigate('/login')
            }else{
                toast.error(data.data.msg, toastOptions)
            }
        } catch (error) {
            console.log(error.message)
        }
    }



    return(
        <>
        <Box
            width={'100%'}
            bg={'inherit'}
            height={'60px'}
        >
            <HStack
                width={{
                    base: '100%',
                    sm: 'calc(100vw - 15vw)',
                    md: 'calc(100vw - 30vw)'
                }}
                px={{
                    base: "20px",
                    sm: '10px'
                }}
                mx={'auto'}
                height={'inherit'}
                justify={'space-between'}
            >
                <Text
                    fontSize={{
                        base: "24px",
                        sm: '32px'
                    }}
                    fontWeight={'600'}
                >
                    Chat App
                </Text>
                <HStack gap={'15px'}>
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
                        cursor={'pointer'}
                        onClick={handleClick}
                    >
                        <Text>
                            Logout
                        </Text>
                    </Stack>
                    
                    <UserIcon/>
                </HStack>
            </HStack>
        </Box>
        <ToastContainer/>
        </>
    )
}