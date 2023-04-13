const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const utils = require('./utils/task-schema')
// configs
const port = process.env.PORT;

/** Middlewares */
app.use(express.json()); 

/** Routers */
// ##

/** Code */
const tasks = [
    {
        id: 1,
        name: 'Task 1',
        completed: false
    },
    {
        id: 2,
        name: 'Task 2',
        completed: false
    },
    {
        id: 3,
        name: 'Task 3',
        completed: false
    }
];

/** Routes */
// Get All
app.get('/api/tasks', (request, response) => {
    response.send(tasks);
});

// Get by ID
app.get('/api/tasks/:id', (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send('The task with the provided ID does not exist');
    response.send(task);
});

// Create
app.post('/api/tasks', (request, response) => {
    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send('The name field is required and should be at least 3 characters long');

    const task = {
        id: tasks.length + 1,
        name: request.body.name,
        completed: request.body.completed
    };

    tasks.push(task);
    response.status(201).send(task);
});

// Put
app.put('/api/tasks/:id', (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send('The task with the provided ID does not exist');

    const { error } = utils.validateTask(request.body);

    if (error) return response.status(400).send('The name field is required and should be at least 3 characters long');

    task.name = request.body.name;
    task.completed = request.body.completed;

    response.status(200).send(task);
});

// Patch
app.patch('/api/tasks/:id', (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send('The task with the provided ID does not exist');

    const { error } = utils.validateTask(request.body);

    if (error) return response.status(400).send('The name field is required and should be at least 3 characters long');

    task.name = request.body.name;

    if (request.body.completed) {
        task.completed = request.body.completed
    };

    response.send(task);
});

// Delete
app.delete('/api/tasks/:id', (request, response) => {
    const taskId = request.params.id;
    const task = tasks.find(task => task.id === parseInt(taskId));
    if(!task) return response.status(404).send('The task with the provided ID does not exist');

    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    response.send(task);
});

// app.listen(port, () => {
//     console.log(`Server has started on port: ${port}`)
// });
/** to avoid error:: 'TypeError: app.address is not a function' :: */
module.exports = app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
});