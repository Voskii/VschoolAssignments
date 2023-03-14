const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
    {name: "The name",description: "The description of the todo",imageUrl: "http://www.myimage....",completed: false,_id: uuidv4()},
    {name: "Fish",description: "fish is my trial and error code",imageUrl: "http://www.myfishyimage....",completed: true,_id: uuidv4()}
]

todoRouter.route('/')
        .get((req, res) => {
        res.send(todos)
    })

    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to database`)
})

// get one
todoRouter.get('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

    

todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('Deleted todo')
})

module.exports = todoRouter