import Head from "next/head";
import { useReducer, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import todosData from "../todo.json";
 
export default function Home() {
  const [todos, setTodos] = useState(todosData.todos);
  const [task, setTask] = useState([])
  const [dueDate, setDueDate] = useState([])
 
  
 
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json()
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res =  await fetch('/api/todos', {
      // await fetch('/api/todos', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({task, dueDate})
    })
    const data = await res.json()
    setTodos(data)
    console.log(data);  
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   savedToDo()
  //   setTask("")
  //   setDueDate("")
  // }
 
  return (
    <div className={styles.container}>
      <Head>
        <title>To Do List</title>
      </Head>
      <main>
        <br/>
        <form align="center" onSubmit={handleSubmit}>
          Task:<input type="text" required onChange={(e) => setTask(e.target.value)} value={task} />
          <br/>
          Due Date:<input type="text" required onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
          <br/>
          <button type="submit">Submit</button>
        </form>
        <br/>
        <br/>
        {todos.map((todo) => {
            return (
              <div align="center" key={todo.id}>
                Task: {todo.task}
                <br/>
                Due Date: {todo.dueDate}
                <br/>
                <hr/>
              </div>
            );
        })}
        
      </main>
    </div>
  );
}
