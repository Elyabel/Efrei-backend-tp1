const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/some-html', (req, res) => {
    res.send('<html><body><h1>bonjour html</h1></body></html>');
});

app.get('/some-json', (req, res) => {
    res.json({
        "age": 22,
        "nom": "Jane",
    });
});

app.get('/transaction', (req, res) => {
    const tab = [100, 2000, 3000];
    console.log(req.headers);
    console.log(req.body);
    res.send(tab);
});

app.get('/exo-query-string', (req, res) => {
    console.log(req.query);
    const { age } = req.query;
    res.send(`<html><body><h1>${age}</h1></body></html>`);
});

app.get('/get-user/:userId', (req, res) => {
   const { userId } = req.params;
   res.send(userId);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
