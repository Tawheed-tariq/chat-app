import { Box, HStack, Icon, Input, Text, VStack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {FiEdit3} from "react-icons/fi"
import {IoMdClose, IoMdCheckmark} from "react-icons/io"

const Info = ({header, headerInfo, fontSize}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(undefined)


    const handleValidation = () => {
        if(value === ""){
            console.log("toastify error here")
        }
    }


    const handleSubmit = () => {
        if(value != undefined){
            if(handleValidation()){
                console.log("toastify error here")
            }
        }
        setIsEditing(prev =>  (prev = !prev))
    }


    
    return( 
        <Box
            width={'500px'}
        >
            <Text color={'primary'}>{header}</Text>
            <HStack
                width={'100%'}
                justifyContent={'space-between'}
            >
                {isEditing ? 
                    <Input
                    defaultValue={headerInfo}
                    variant={'flushed'}
                    fontSize={fontSize}
                    color={'txt'}
                    autoFocus={true}
                    onChange={(e) => setValue(e.target.value)}
                    />
                 : 
                    <Text fontSize={fontSize}>{headerInfo}</Text>
                }

                {
                isEditing ? 
                    <HStack ml={'10px'} alignSelf={'flex-end'} size='sm'>
                        <Icon onClick={handleSubmit} cursor={'pointer'} textColor={'primary'} as={IoMdCheckmark}  />
                        <Icon onClick={() => {setIsEditing(prev =>  (prev = !prev))}} cursor={'pointer'}  textColor={'primary'} as={IoMdClose}  />
                    </HStack>
                    : 
                    <Icon onClick={() => {setIsEditing(prev =>  (prev = !prev))}} cursor={'pointer'} alignSelf={'flex-end'} textColor={'primary'} as={FiEdit3} />
                }
                
            </HStack>
        </Box>
    )
}


export default function About(){
    const [details , setDetails]  = useState({})
    useEffect(() => {
        const getUserInfo = async () => {
            const data = await JSON.parse(localStorage.getItem('chat-app-user'))
            setDetails(prev => (prev = data))
        }
        getUserInfo()
    }, [])

    
    return (
        <VStack spacing={'4'}>
            <Info header="Username" headerInfo={details.username} fontSize={'32px'} />
            <Info header={'Email'} headerInfo={details.email} fontSize={'24px'} />
            <Info header={'Bio'} headerInfo={'A developer with passion of technology and creativity'} fontSize={'18px'} />
        </VStack>
    )
}

