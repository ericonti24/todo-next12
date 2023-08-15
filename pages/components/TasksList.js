import { HStack, VStack, Text, Box } from "@chakra-ui/react"
import DeleteTask from "./DeleteTask"
import { useEffect, useState } from "react"
import {supabase} from '../api/test'
import Task from './Task'

export default function TaskList() {

    const [listToDos, setListToDos] = useState([])

    const fetchData = async () => {
        let { data: todos, error } = await supabase.from('todos').select('*')
        console.log(todos);
        setListToDos(todos)
        
    }

    useEffect(() => {
        fetchData()
    },[])

    // return (
    //     <Box align="center">
    //         NO TASKS ADDED
    //     </Box>
    // )

    return (
        <>
            <VStack>
                {listToDos.map((todo) => (
                    <Task todo={todo} key={todo.id}/>
                ))}
            </VStack>
        </>
    )
}