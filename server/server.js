const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('./routes');
const app = express();


//*Set Port to 9000
app.set( 'port', process.env.PORT || 9000 );

const dbOptions = {
    host:     'localhost',
    port: 3306,
    user:     'root',
    password: 'root_0843',
    database: 'Library'
}

//* Middlewares
app.use(myconn(mysql, dbOptions, 'single'));
//* for parsing application/json
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto con el dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));


//*First route-endpoint
app.get('/', (req, res) => {
    res.send( "Welcome to my LIbrary App!!!!!!" );
});

app.use('/api',routes);

//* Server running
//*Listen the server on port 9000
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})
