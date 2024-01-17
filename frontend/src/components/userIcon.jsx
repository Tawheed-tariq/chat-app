import { Icon, Stack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";

export default function UserIcon() {
    return (
        <Stack 
            width={'40px'}
            height={'40px'}
            borderRadius={'50%'}
            bg={'primary'}
            ml={'auto'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Icon as={FaUserAlt}/>
        </Stack>
    )
}