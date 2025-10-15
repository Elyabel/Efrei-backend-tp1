const express = require('express');
const { client, connectDB } = require('./utils/db_utils');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur SQL');
    }
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
