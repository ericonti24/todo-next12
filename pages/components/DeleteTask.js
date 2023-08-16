import { Button, Flex, IconButton, useToast } from "@chakra-ui/react";
import {BiTrash} from 'react-icons/bi'
import {supabase} from '../api/test'

export default function DeleteTask({id, fetchData}) {

    const toast = useToast()

    const handleDelete = async () => {
        
        const { data, error } = await supabase.from('todos').delete().eq('id', id )

        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data);
        }
        toast({
            title: error || 'Task deleted!',
            position: 'top',
            status: error ? 'error' : 'success',
            duration: 2000,
            isClosable: true,
          });
        fetchData()
    }

    return (
        <IconButton isRound="true" icon={<BiTrash/>} onClick={handleDelete}/>
    )
}