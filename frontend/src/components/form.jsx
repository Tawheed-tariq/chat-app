import { Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";

export default function Form(){
    return (
        <Stack 
            bg={'form'}
            px={'30px'}
            py={'20px'}
            borderRadius={'22px'}
            w={'100%'}
            maxW={'545px'}
        >
            <Text fontSize={'32px'} fontWeight={'600'}>Registration</Text>
            <FormControl>
                <FormLabel color={'txt'}>Username</FormLabel>
                <Input type='text' textColor={'txt'} borderRadius={{
                    base: '20px',
                    md: '30px'
                }} bg={'input'} border={'none'}/>
            </FormControl>
            <FormControl>
                <FormLabel color={'txt'}>Email</FormLabel>
                <Input type='text' textColor={'txt'}borderRadius={{
                    base: '20px',
                    md: '30px'
                }} bg={'input'} border={'none'}  />
            </FormControl>
            <FormControl>
                <FormLabel color={'txt'}>Password</FormLabel>
                <Input type='text' borderRadius={{
                    base: '20px',
                    md: '30px'
                }} textColor={'txt'} bg={'input'} border={'none'} />
            </FormControl>
            <FormControl>
                <FormLabel color={'txt'}>Confirm Password</FormLabel>
                <Input  type='text' textColor={'txt'} borderRadius={{
                    base: '20px',
                    md: '30px'
                }} bg={'input'} border={'none'} />
            </FormControl>
            <Button my={'10px'} width={'110px'} colorScheme="none" height={'40px'} borderRadius={'20px'} bg={'secondary'} color={'txt'}>
                Submit
            </Button>
        </Stack>
    )
}