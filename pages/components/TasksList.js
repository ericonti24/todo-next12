import { HStack, VStack, Text, Box, Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {supabase} from '../api/test'
import Task from './Task'

export default function TaskList({fetchData, listToDos}) {

    return (
        <>
            <VStack w='40%'>
                {listToDos.map((todo) => (
                    <Task todo={todo} key={todo.id} fetchData={fetchData}/>  
                ))}
            </VStack>
        </>
    )

    
}