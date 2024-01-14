import {Stack, Text } from "@chakra-ui/react";

export default function AppDesc(){
    return(
        <Stack
                maxW={'350px'}
                // alignSelf={'flex-start'}
            >
                <Text
                    fontSize={{
                        base: '32px',
                        sm: '48px'
                    }}
                    fontWeight={'600'}
                >
                    Chat App
                </Text>
                <Text>
                    A Real-time chat application which allows you to chat with your friends and other people in a fast and secure way
                </Text>
            </Stack>
    )
}