import Head from "next/head";
import { useReducer, useState, useEffect } from "react";
import todosData from "../todo.json";
import ToDoForm from './components/todoForm'
import { Button, ButtonGroup, VStack } from '@chakra-ui/react'
import TasksList from './components/TasksList'
 
export default function Home() {
  // const [todos, setTodos] = useState(todosData.todos);
 
  // const fetchTodos = async () => {
  //   const response = await fetch("/api/todos");
  //   const data = await response.json()
  //   setTodos(data);
  // };

  // useEffect(() => {
  //   fetchTodos()
  // },[])

  // const deleteToDo = (id) => {
  //   fetch(`/api/todos/`, {
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id,
  //     })
  //   }).then(() => {
  //     fetchTodos()
  //   })
  // }
 
  return (
    <VStack>
      <Head>
        <title>To Do List</title>
      </Head>
      <main>
        <br/>
        {/* <ToDoForm fetchTodos={fetchTodos}/> */}
        <ToDoForm />
        <br/>
        <br/>
        <TasksList />
      </main>
    </VStack>
  );
}
