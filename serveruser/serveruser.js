const express = require('express');
const http = require('http');
const path = require('path');
const mysql = require('mysql')

const app = express();
let server = http.createServer(app);

const serveruserPath = path.resolve(__dirname, '../server');
const port = process.env.PORT || 9090;

app.use(express.static(serveruserPath));

/** /parser////////

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
///////////////////////////*/

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
  console.log('The solution is: ', res[1]);
});

//connection.end();/////////////


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});


/////horacio.estevez@gmail.com////