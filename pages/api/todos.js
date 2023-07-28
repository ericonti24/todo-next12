// import todos from "../../todo.json";
// import {todos} from '../todos.json'

import todosData from '../../todo.json'

export default function handler(req, res) {

    const fs = require('fs')
    const todos = todosData.todos

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
        const data = {todos}
            fs.writeFile('todo.json', JSON.stringify(data), (err) => {

            if(err) throw err;
            else console.log('success');
        })
        return res.status(200).json(todos)
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



