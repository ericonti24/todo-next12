import {useState} from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Home({fetchTodos}) {

    const [task, setTask] = useState([])
    const [dueDate, setDueDate] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res =  await fetch(`/api/todos`, {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({task, dueDate})
        })
        const data = await res.json()
        fetchTodos()
        setTask("")
        setDueDate("")
        console.log(data);  
      }

    return (
        <form align="center" onSubmit={handleSubmit}>
          <Input 
            htmlSize={30} 
            width='auto' 
            placeholder='enter task...'
            type="text" 
            required 
            onChange={(e) => setTask(e.target.value)} 
            value={task} 
          />
          <br/>
          <Input 
            htmlSize={30} 
            width='auto' 
            placeholder='enter due date...'
            type="text" 
            required 
            onChange={(e) => setDueDate(e.target.value)} 
            value={dueDate} 
          />
          <br/>
          <Button 
            type="submit"
            size='sm'
            colorScheme='teal'
            variant='outline'
          >
            Submit
          </Button>
        </form>
    )
}