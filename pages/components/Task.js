import { HStack, VStack, Text, Box, Button, IconButton } from "@chakra-ui/react"
import {BiTrash} from 'react-icons/bi'
import DeleteTask from "./DeleteTask"
import {supabase} from '../api/test'


export default function Task({todo}) {

    const handleDelete = async () => {
        
        const { error } = await supabase.from('todos').delete().eq('id', todo.id)

        if (error) {
            console.log(error);
        }
       
        console.log('button clicked');
    }

    return(
        <HStack>
            <Text>
                {todo.task}
            </Text>
            {/* <DeleteTask todoID={todo.id}/> */}
            <IconButton isRound="true" icon={<BiTrash/>} onClick={handleDelete}/>
        </HStack>
    )
}
