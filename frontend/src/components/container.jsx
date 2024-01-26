import {  Stack } from "@chakra-ui/react";
export default function Container({children, minheight}) {
    return(
        <Stack
            minHeight={minheight}
            p={{
                base:'15px',
                sm:'30px'
            }}
            bg={'container'}
            w={'100%'}
            borderRadius={'24px'}
            flexDir={{
                base: "column",
                md: 'row'
            }}
            gap={'4'}
            justify={'space-around'}
        >
            {children}
        </Stack>
    )
}