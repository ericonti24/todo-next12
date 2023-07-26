// import todos from "../../todo.json";
import {todos} from '../../todos'

 
export default function handler(req, res) {
    if(req.method === "GET"){
        res.status(200).json(todos)
    } else if (req.method == "POST") {
        const task = req.body.task
        const dueDate = req.body.dueDate
        const newToDo = {
            id: todos.length + 1,
            task: task, 
            dueDate: dueDate
        }
        todos.push(newToDo)
        res.status(200).json(newToDo)
        console.log(newToDo);
    }
}

// export default function handler(req, res) {
//     if(req.method === "GET"){
//         res.status(200).json(todos)
//     }
//     else if(req.method === "POST"){
//         todos.push({task:`${req.body.task}`})
//         res.status(200).json(todos)
//     }
// }



