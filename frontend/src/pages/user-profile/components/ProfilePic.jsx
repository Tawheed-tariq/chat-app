import { Box, Icon, Stack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

export default function ProfilePic(){
    return (
            <Stack 
                my={'50px'}
                width={{
                    base: '100px',
                    sm: '150px',
                    md: '200px'
                }}
                alignSelf={'center'}
                height={{
                    base: '100px',
                    sm: '150px',
                    md: '200px'
                }}
                borderRadius={'50%'}
                bg={'primary'}
                justifyContent={'center'}
                alignItems={'center'}
                // _hover={{
                //     bg: '#000'
                // }}
            >
                <Icon 
                    width={{
                        base: '40px',
                        sm: '50px',
                        md: '100px'
                    }} 
                    height={{
                        base: '60px',
                        sm: '80px',
                        md: '100px'
                    }} 
                    as={FaUserAlt}
                />
            </Stack>
    )
}