const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('./routes');
const app = express();

//* for parsing application/json
app.use(express.json()); 

app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto con el dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

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


//*First route-endpoint
app.get('/', (req, res) => {
    res.send( "Welcome to my API LIbrary!!!!!!" );
});

app.use('/api', routes);


//* Server running
//*Listen the server on port 3001
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})
