const express = require('express');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connecté à la base postgres');

        await client.query('SET search_path TO apiTest;');
        console.log('Schéma défini sur apiTest');
    } catch (err) {
        console.error('Erreur de connexion à la base :', err);
    }
};

connectDB();

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

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});