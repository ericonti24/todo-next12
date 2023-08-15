import { Button, Flex, IconButton } from "@chakra-ui/react";
import {BiTrash} from 'react-icons/bi'
import {supabase} from '../api/test'

export default function DeleteTask({todoID}) {

    const handleDelete = async () => {
        
        const { data, error } = await supabase
            .from('todos')
            .delete()
            .eq('id', todoID )

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
        }
    }

    return (
        <IconButton isRound="true" icon={<BiTrash/>} onClick={handleDelete}/>
    )
}