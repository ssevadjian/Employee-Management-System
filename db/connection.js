const util = require('util');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ems_DB'
});
// Start connection
connection.connect();


// connection.connect(err => {
//     if(err) throw err;
//     start();
// });
// Sets it up to use async and await
connection.query = util.promisify(connection.query);

module.exports = connection;