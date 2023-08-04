import Head from "next/head";
import { useReducer, useState, useEffect } from "react";
import todosData from "../todo.json";
import ToDoForm from './components/todoForm'
import { Button, ButtonGroup } from '@chakra-ui/react'
 
export default function Home() {
  const [todos, setTodos] = useState(todosData.todos);
 
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json()
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos()
  },[])

  const deleteToDo = (id) => {
    fetch(`/api/todos/`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      })
    }).then(() => {
      fetchTodos()
    })
  }
 
  return (
    <div>
      <Head>
        <title>To Do List</title>
      </Head>
      <main>
        <br/>
        <ToDoForm fetchTodos={fetchTodos}/>
        <br/>
        <br/>
        {todos.map((todo) => {
            return (
              <div align="center" key={todo.id}>
                Task: {todo.task}
                <br/>
                Due Date: {todo.dueDate}
                <br/>
                <Button 
                  onClick={() => deleteToDo(todo.id)}
                  size='sm'
                  colorScheme='gray'
                  color='black'
                >
                  Done
                </Button>
                <hr/>
              </div>
            );
        })}
        
      </main>
    </div>
  );
}
