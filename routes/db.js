const mysql = require('mysql');
const dbMsg = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'story'
}

const connection = mysql.createConnection(dbMsg);
connection.connect();
module.exports = connection;
