import { Box, Button, FormControl, HStack, Icon, Input, Stack } from "@chakra-ui/react";
import { MdOutlineSend } from "react-icons/md";
import UserIcon from "../../../components/userIcon";
import { useState } from "react";

export default function ChatInput({handleSend}) {

    const [msg , setMsg] = useState("")


    const handleChange = (e) => {
        setMsg(e.target.value)
    }

    const handelSubmit = () => {
        if(msg.length > 0){
            console.log(msg)
            handleSend(msg)
            setMsg("")
        }  
    }


    return(
        <HStack height={'70px'} w={'100%'}>
            <Box>
                <UserIcon/>
            </Box>
            <FormControl>
                <Input 
                    onChange={(e) => handleChange(e)}
                    value={msg}
                    type='text' 
                    textColor={'txt'} 
                    borderRadius={'25px'} 
                    bg={'input'} 
                    border={'none'}
                    height={'50px'} 
                    fontSize={'18px'}
                />
            </FormControl>
            <Stack
                onClick={handelSubmit}
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
    )
}

