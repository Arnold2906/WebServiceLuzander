const mysql = require('mysql');

const config = {
    connectionLimit: 10,
    host: '35.222.60.55',
    user: 'integracion',
    password: 'integracionnube',
    database: 'dad'
};

var pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

module.exports = pool;