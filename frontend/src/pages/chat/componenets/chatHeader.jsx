import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import UserIcon from "../../../components/userIcon";

export default function ChatHeader({username}){
    return(
        <HStack>
            <Box>
                <UserIcon/>
            </Box>
            <Stack
                width={'100%'}
                px={'20px'}
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