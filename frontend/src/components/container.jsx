import { HStack, Stack, Text } from "@chakra-ui/react";
import AppDesc from "./AppDesc";
export default function Container({children}) {
    return(
        <HStack
            p={{
                base:'15px',
                sm:'30px'
            }}
            bg={'container'}
            w={'100%'}
            borderRadius={'24px'}
            flexDir={{
                base: 'column',
                md: 'row'
            }}
            gap={'4'}
            justify={'space-around'}
        >
            <AppDesc/>
            {children}
        </HStack>
    )
}