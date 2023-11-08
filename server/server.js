const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');

const routes = require('./routes');
const app = express();

//* for parsing application/json
app.use(express.json()); 


//*Set Port to 3001
app.set( 'port', process.env.PORT || 3001 );

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
