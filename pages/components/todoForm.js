import {useState} from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup, HStack, useToast } from '@chakra-ui/react'
import {supabase} from '../api/test'

  export default function ToDoForm({fetchData}) {

    const [task, setTask] = useState("")
    const toast = useToast()

    const handleSubmit = async (e) => {
      e.preventDefault()

      const { data, error } = await supabase.from('todos').insert([{ task }]).select()

      toast({
        title: error || 'Task added!',
        position: 'top',
        status: error ? 'error' : 'success',
        duration: 2000,
        isClosable: true,
      });

      setTask("")
      fetchData()
    }

    return (
      <form onSubmit={handleSubmit}>
        <HStack my="4" h="20">
          <Input 
              htmlSize={30} 
              width='auto' 
              placeholder='enter task...'
              type="text" 
              required 
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          <Button 
            type="submit"
            size='sm'
            colorScheme='teal'
            variant='outline'
          >
            Add
          </Button>
        </HStack>
      </form>
    )
}