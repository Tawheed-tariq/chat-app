import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import UserIcon from './userIcon'
export default function Navbar(){
    return(
        <Box
            width={'100%'}
            bg={'inherit'}
            height={'60px'}
        >
            <HStack
                width={{
                    base: '100%',
                    sm: 'calc(100vw - 15vw)',
                    md: 'calc(100vw - 30vw)'
                }}
                px={{
                    base: "20px",
                    sm: '10px'
                }}
                mx={'auto'}
                height={'inherit'}
                justify={'space-between'}
            >
                <Text
                    fontSize={{
                        base: "24px",
                        sm: '32px'
                    }}
                    fontWeight={'600'}
                >
                    Chat App
                </Text>
                <HStack gap={'15px'}>
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
                        <Text>
                            Logout
                        </Text>
                    </Stack>
                    
                    <UserIcon/>
                </HStack>
            </HStack>
        </Box>
    )
}