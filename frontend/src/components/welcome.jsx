import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Welcome() {
    const [currUsername , setCurrUsername] = useState(undefined)

    useEffect(() => {
        const getCurrUser = async () => {
            const data = await JSON.parse(localStorage.getItem("chat-app-user"))
            setCurrUsername(() => (
                data.username
            ))
        }
        getCurrUser()
    }, [])


    return(
        <Box
            width={'100%'}
            height={'100%'}
        >
            <Image src="/robot.gif"/>
            <Text
                textAlign={'center'}
                fontSize={'40px'}
            >
                Welcome <Box as="span" textColor={'primary'} >{currUsername}</Box>
            </Text>
            <Text
                textAlign={'center'}
            >
                Please select a chat to Start messaging.
            </Text>
        </Box>
    )
}