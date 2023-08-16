import { HStack, VStack, Text, Box, Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {supabase} from '../api/test'
import Task from './Task'

export default function TaskList({fetchData, listToDos}) {

    return (
        <>
            <VStack>
                {listToDos.map((todo) => (
                    <Task todo={todo} key={todo.id} fetchData={fetchData}/>  
                ))}
            </VStack>
        </>
    )

    
}