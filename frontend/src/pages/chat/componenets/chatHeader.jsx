import { HStack, Stack, Text } from "@chakra-ui/react";
import UserIcon from "../../../components/userIcon";

export default function ChatHeader({username}){
    return(
        <HStack>
            <UserIcon/>
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
            >
                <Text >
                    {username}
                </Text>
            </Stack>
        </HStack>

    )
}