const express = require('express');
const { client, connectDB } = require('./utils/db_utils');
const { logHeaders, tokenPresent, firewall} = require('./middlewares');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('templates'));

app.use(firewall);
app.use(logHeaders);

app.get('/hello', (req, res) => {
    return res.send('<h1>hello</h1>');
});

app.get('/restricted1', tokenPresent, (req, res) => {
    return res.status(200).json({
        message: 'topsecret',
    });
});

app.get('/restricted2', tokenPresent, (req, res) => {
    return res.status(200).send('<h1>Admin space</h1>');
});

(async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Serveur lancé sur http://localhost:${port}`);
        });
    } catch (e) {
        console.error('Impossible de démarrer le serveur (DB KO).', e);
        process.exit(1);
    }
})();
