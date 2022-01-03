const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ka1202!@$%',
        database: 'election'
    },
    console.log('Connected to the election dataase.')
);

module.exports = db;