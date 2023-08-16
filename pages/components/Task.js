import { HStack, VStack, Text, Box, Button, IconButton, StackDivider } from "@chakra-ui/react"
import {BiTrash} from 'react-icons/bi'
import DeleteTask from "./DeleteTask"
import {supabase} from '../api/test'


export default function Task({todo, fetchData}) {

    return(
        <HStack borderColor='gray' borderWidth="2px" p='5' borderRadius='lg' w='100%'>
            <Text w='100%'>
                {todo.task}
            </Text>
            <DeleteTask id={todo.id} fetchData={fetchData}/>
        </HStack>
    )
}
