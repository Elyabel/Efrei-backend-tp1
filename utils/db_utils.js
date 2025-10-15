const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});

async function connectDB() {
    try {
        await client.connect();
        console.log('Connecté à la base postgres');

       // await client.query('SET search_path TO apiTest;');
        console.log('Schéma défini sur apiTest');
    } catch (err) {
        console.error('Erreur de connexion à la base :', err);
        throw err;
    }
}

module.exports = { client, connectDB };
