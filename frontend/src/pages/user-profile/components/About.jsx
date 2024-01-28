import { Box, HStack, Icon, Input, Text, VStack} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {FiEdit3} from "react-icons/fi"
import {IoMdClose, IoMdCheckmark} from "react-icons/io"
import {editProfile} from "../../../utils/ApiRoutes"

const Info = ({header, headerInfo, fontSize, handleSubmit, setValue}) => {
    const [isEditing, setIsEditing] = useState(false)
    const name = header.toLowerCase()


    const submit = async () => {
        const res = await handleSubmit()
        if(res)
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
                    name={name}
                    onChange={(e) => setValue(e)}
                    />
                 : 
                    <Text fontSize={fontSize}>{headerInfo}</Text>
                }

                {
                isEditing ? 
                    <HStack ml={'10px'} alignSelf={'flex-end'} size='sm'>
                        <Icon onClick={submit} cursor={'pointer'} textColor={'primary'} as={IoMdCheckmark}  />
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
    const [values , setValues] = useState({})
    useEffect(() => {
        const getUserInfo = async () => {
            const data = await JSON.parse(localStorage.getItem('chat-app-user'))
            setDetails(prev => (prev = data))
            setValues(prev => (prev = data))
        }
        getUserInfo()
    }, [])
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = async () => {
        try {
            const {username , email, _id} = values
            const {data} = await axios.put(`${editProfile}/${_id}`, {
                _id,
                username,
                email
            })
            if(data.status === false){
                console.log(data.msg)
                return false
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <VStack spacing={'4'}>
            <Info 
                header="Username" 
                setValue={handleChange}
                handleSubmit={handleSubmit}
                headerInfo={details.username} 
                fontSize={'32px'} 
            />
            <Info 
                header={'Email'} 
                setValue={handleChange}
                handleSubmit={handleSubmit}
                headerInfo={details.email} 
                fontSize={'24px'} 
            />
            <Info 
                header={'Bio'} 
                handleSubmit={handleSubmit}
                headerInfo={'A developer with passion of technology and creativity'} 
                fontSize={'18px'} 
            />
        </VStack>
    )
}

