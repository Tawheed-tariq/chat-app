import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {registerRoute} from '../../../utils/ApiRoutes'
import {useNavigate} from 'react-router-dom'




export default function UserForm(){
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
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    const handleValidation = () => {
        const {username , email , password , confirmPassword} = values
        if(password != confirmPassword){
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false
        }
        if(username.length < 3){
            toast.error(
                "length of username must be greater than 3",
                toastOptions
            )
            return false
        }
        if (password.length < 8) {
            toast.error(
              "Password should be equal or greater than 8 characters.",
              toastOptions
            );
            return false;
        }
        if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            if(handleValidation()){
                const {username , email, password } = values
                const {data} = await axios.post(registerRoute, {
                    username,
                    email,
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
        } catch (error) {
            console.log(error.message)
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
            <Text fontSize={'32px'} fontWeight={'600'}>Registration</Text>

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
                                    // placeholder="password"
                                />
                            </FormControl>
                        )}
                    </Field>

                    <Field name="email">
                        {({field , form}) => (
                            <FormControl>
                                <FormLabel color={'txt'}>Email</FormLabel>
                                <Input 
                                    {...field} 
                                    onChange={(e) => handleChange(e)}
                                    type='email' 
                                    textColor={'txt'} 
                                    borderRadius={{
                                        base: '20px',
                                        md: '30px'
                                    }} 
                                    bg={'input'} 
                                    border={'none'} 
                                    // placeholder="password"
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
                                    // placeholder="password"
                                />
                            </FormControl>
                        )}
                    </Field>

                    
                    <Field name="confirmPassword">
                        {({field , form}) => (
                            <FormControl>
                                <FormLabel color={'txt'}>Confirm Password</FormLabel>
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
                                    // placeholder="password"
                                />
                            </FormControl>
                        )}
                    </Field>

                    <Button type="submit" my={'20px'} width={'110px'} colorScheme="none" height={'40px'} borderRadius={'20px'} bg={'secondary'} color={'txt'}>
                        Register
                    </Button>
                </Form>
            </Formik>
            <ToastContainer/>
        </Stack>
    )
}