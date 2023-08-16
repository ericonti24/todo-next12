import Head from "next/head";
import { useReducer, useState, useEffect } from "react";
import todosData from "../todo.json";
import ToDoForm from './components/todoForm'
import { Button, ButtonGroup, VStack } from '@chakra-ui/react'
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
    <VStack>
      <Head>
        <title>To Do List</title>
      </Head>
      <main>
        <br/>
        {/* <ToDoForm fetchTodos={fetchTodos}/> */}
        <ToDoForm fetchData={fetchData}/>
        <br/>
        <br/>
        <TasksList fetchData={fetchData} listToDos={listToDos}/>
      </main>
    </VStack>
  );
}
