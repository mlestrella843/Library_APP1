const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const app = express();

const path = require('path');

//*SET PORT to 9000
app.set( 'port', process.env.PORT || 9000 );

//*SET DATABASE AND .DOTENV VARIABLES
dotenv.config({ path:'./.env'});
const dbOptions = {
    host: process.env.DATABASE_HOST,
    port: 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}

//* MIDLEWIRES
app.use(myconn(mysql, dbOptions, 'single'));
//* for parsing application/json
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto con el dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

//   const corsOptionsForLogin = {
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   };
//   app.use('/api/login', cors(corsOptionsForLogin));
  
//*for set the routes
app.use('/api',routes);

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');

//*First route-endpoint
app.get('/', (req, res) => {
    // res.send( "Welcome to my LIbrary App!!!!!!" );
    res.render("index");
});

//* SERVER RUNNING
//*Listen the server on port 9000
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})
