import { Box, FormControl, HStack, Icon, Input, Stack } from "@chakra-ui/react";
import { MdOutlineSend } from "react-icons/md";
import { useState } from "react";
import Picker from "emoji-picker-react";
import {BsEmojiSmile} from 'react-icons/bs'

export default function ChatInput({handleSend}) {

    const [msg , setMsg] = useState("")
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    
    
    const handleEmojiPickerhideShow = () => {
      setShowEmojiPicker(!showEmojiPicker);
    };
  
    const handleEmojiClick = (emojiObject) => {
        let message = msg;
        message += " " + emojiObject.emoji;
        setMsg(message);
    };



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
            <Box position={'relative'}>
                <Box position={'absolute'} bottom={'50px'}>
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </Box>
                <Stack 
                    width={'40px'}
                    height={'40px'}
                    borderRadius={'50%'}
                    bg={'primary'}
                    ml={'auto'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                    <Icon 
                        width={'20px'} 
                        onClick={handleEmojiPickerhideShow} 
                        height={'20px'} 
                        as={BsEmojiSmile}
                    />
                </Stack>
            </Box>
            <FormControl>
                <Input 
                    onClick={() => {
                        if(showEmojiPicker)
                            setShowEmojiPicker(!showEmojiPicker); 
                    }}
                    onChange={(e) => handleChange(e)}
                    value={msg}
                    type='text' 
                    textColor={'txt'} 
                    borderRadius={'25px'} 
                    bg={'boxSmall'} 
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
                <Icon 
                    as={MdOutlineSend}
                    onClick={() => {
                        if(showEmojiPicker)
                            setShowEmojiPicker(!showEmojiPicker); 
                    }}
                />
            </Stack>
        </HStack>
    )
}

