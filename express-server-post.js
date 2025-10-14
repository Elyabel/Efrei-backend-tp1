const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

/*
title (string)
description (string)
isDone (boolean)

/update-task/:id qui permet de mettre à jour une tache spécifique
/delete-task/:id qui permet de supprimer une tache.

*/
var tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/new-task', (req, res) => {
   const newTask = req.body;

   tasks.push(newTask);

   res.send('ok');
});

app.patch('/update-task/:id', (req, res) => {
    const i = Number(req.params.id) - 1;

    if (!Number.isInteger(i) || i < 0 || i >= tasks.length) {
        return res.status(404).send('Task not found.');
    }

    tasks[i] = { ...tasks[i], ...req.body };
    res.send('ok');
});

app.delete('/delete-task/:id', (req, res) => {
    const i = Number(req.params.id) - 1;

    if (!Number.isInteger(i) || i < 0 || i >= tasks.length) {
        return res.status(404).send('Task not found.');
    }

    tasks.splice(i, 1);
    res.send('ok');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
