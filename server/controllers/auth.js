const express = require('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');

app.set( 'port', process.env.PORT || 9000 );

//*SET DATABASE AND .DOTENV VARIABLES. MYSQL DATBASE, PORT BY DEFAULT 3306.
dotenv.config({ path:'./.env'});
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto con el dominio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

const dbOptions = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//app.use(myconn(mysql, dbOptions, 'single'));

exports.register = (req,res) => {
    console.log(req.body);

    const { name, email, password, pass_confirm } = req.body;

    dbOptions.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error)
        }
        if(results.lenght > 0 ){
            return res.render('register', {
            message: 'That email is already in use'
            })
        }else if( password!= pass_confirm){
            return res.render('register', {
            message: 'Password do not match'
            });
        }

        let hashedPassword = await bcrypt.hash( password, 8 );
        console.log(hashedPassword);
    });

    // res.send("Form Submitted");

}