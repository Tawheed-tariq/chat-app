import { Box, Icon, Stack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

export default function ProfilePic(){
    return (
            <Stack 
                my={'50px'}
                width={'200px'}
                alignSelf={'center'}
                height={'200px'}
                borderRadius={'50%'}
                bg={'primary'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Icon width={'100px'} height={'100px'} as={FaUserAlt}/>
            </Stack>
    )
}