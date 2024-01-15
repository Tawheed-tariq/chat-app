import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Container from "../../components/container";
import LoginForm from "./components/loginForm";

export default function Login() {
    return(
        <Box
            width={'100vw'}
            height={'100vh'}
        >
            <Navbar/>
            <Box
                minH={'100%'}
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
                    <LoginForm/>
                </Container>
            </Box>
        </Box>
    )
}