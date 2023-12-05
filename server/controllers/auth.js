
const dbOptions = {
    host: process.env.DATABASE_HOST,
    port: 3306,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}

const mysql = require('mysql');

const myconn = require('express-myconnection');

app.use(myconn(mysql, dbOptions, 'single'));



exports.register = (req,res) => {
    console.log(req.body);

    const { name, email, password, pass_confirm } = req.body;

    dbOptions.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {
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
    });

    res.send("Form Submitted");

}