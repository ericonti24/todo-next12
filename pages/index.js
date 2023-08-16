import Head from "next/head";
import { useReducer, useState, useEffect } from "react";
import ToDoForm from './components/todoForm'
import { Button, ButtonGroup, VStack, Heading } from '@chakra-ui/react'
import TasksList from './components/TasksList'
import {supabase} from '../pages/api/test'
 
export default function Home() {

  const [listToDos, setListToDos] = useState([])

    const fetchData = async () => {
        let { data: todos, error } = await supabase.from('todos').select('*')
        console.log(todos);
        setListToDos(todos)
    }

    useEffect(() => {
        fetchData()
    },[])
 
  return (
    <VStack p={4}>
      <Head>
        <title>To Do List</title>
      </Head>
      <Heading>
        To Do List
      </Heading>
        <ToDoForm fetchData={fetchData}/>
        
        <TasksList fetchData={fetchData} listToDos={listToDos}/>
    </VStack>
  );
}
