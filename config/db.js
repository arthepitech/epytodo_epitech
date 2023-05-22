require('dotenv').config()
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

con.connect(function(err){
    if (err) {
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('connected as id ' + con.threadId);
});
module.exports = con;
