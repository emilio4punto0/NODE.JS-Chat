const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql')


const app = express();
let server = http.createServer(app);

const servermsnPath = path.resolve(__dirname, '../server');
const port = process.env.PORT || 8080;

app.use(express.static(servermsnPath));

// conexión con mysql

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    database : 'chat_fizz',
  });
  
 connection.connect((err, res) => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query('SELECT * FROM usuarios', (err, res) => {
  if (err) throw err;
  console.log('The solution is: ', res[0]);
});

/////////////


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});