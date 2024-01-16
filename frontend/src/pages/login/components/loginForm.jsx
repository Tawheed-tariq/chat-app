import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import { loginRoute } from "../../../utils/ApiRoutes";





export default function LoginForm() {

    const navigate = useNavigate()
    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };


    const [values , setValues] = useState({
        username : "",
        password: "",
    })

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    const handleValidation = () => {
        const {username , password } = values
        if(username === ""){
            toast.error(
                "Username and password is required",
                toastOptions
            )
            return false
        }
        if (password === "") {
            toast.error(
                "Username and password is required",
              toastOptions
            );
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(handleValidation()){
            const {username , password } = values
            const {data} = await axios.post(loginRoute, {
                username,
                password,
            })
            if(data.status === false){
                toast.error(data.msg, toastOptions)
            }
            else{
                localStorage.setItem("chat-app-user", JSON.stringify(data.info))
                navigate('/')
            }
        }  
    }

    useEffect(() =>{
        if(localStorage.getItem("chat-app-user"))
        navigate('/')
    }, [])

    return (
        <Stack 
            bg={'form'}
            px={'30px'}
            py={'20px'}
            borderRadius={'22px'}
            w={'100%'}
            maxW={'545px'}
        >
            <Text fontSize={'32px'} fontWeight={'600'}>Login</Text>

            <Formik>
                <Form 
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Field name="username">
                        {({field , form}) => (
                            <FormControl>
                                <FormLabel color={'txt'}>Username</FormLabel>
                                <Input 
                                    {...field} 
                                    onChange={(e) => handleChange(e)}
                                    type='text' 
                                    textColor={'txt'} 
                                    borderRadius={{
                                        base: '20px',
                                        md: '30px'
                                    }} 
                                    bg={'input'} 
                                    border={'none'} 
                                />
                            </FormControl>
                        )}
                    </Field>

                        
                    <Field name="password" >
                        {({field , form}) => (
                            <FormControl>
                                <FormLabel color={'txt'}>Password</FormLabel>
                                <Input 
                                    {...field} 
                                    onChange={(e) => handleChange(e)}
                                    type='password' 
                                    textColor={'txt'} 
                                    borderRadius={{
                                        base: '20px',
                                        md: '30px'
                                    }} 
                                    bg={'input'} 
                                    border={'none'} 
                                />
                            </FormControl>
                        )}
                    </Field>

                    <Button type="submit" my={'20px'} width={'110px'} colorScheme="none" height={'40px'} borderRadius={'20px'} bg={'secondary'} color={'txt'}>
                        Login
                    </Button>
                </Form>
            </Formik>
            <ToastContainer/>
        </Stack>
    )
}