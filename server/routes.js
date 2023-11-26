const express = require('express');
const routes = express.Router();



//* Login User
routes.get('/login', (req, res) => {
    res.send( "Estas en el login" );
});


//* Get a book
routes.get('/', (req,res) => {
    // res.send('GET request received');
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })   
});

//* Create a Book
routes.post('/', (req,res) => {
    // res.send('GET request received');
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
       // console.log(req.body);
        conn.query('INSERT INTO books set ?',[req.body],(err, rows) => {
            if(err) return res.send(err)

            res.send('book was inserted');
        })
    }) 
});

//* Delete a Book
routes.delete('/:id', (req,res) => {
    // res.send('GET request received');
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
       // console.log(req.body);
        conn.query('DELETE FROM books WHERE id = ?',[req.params.id],(err, rows) => {
            if(err) return res.send(err)

            res.send('book was excluded');
        })
    })  
});

//* Edit a Book
routes.put('/:id', (req,res) => {
    // res.send('GET request received');
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
       // console.log(req.body);
        conn.query('UPDATE books set ? WHERE id = ?',[ req.body, req.params.id],(err, rows) => {
            if(err) return res.send(err)

            res.send('book was edited or updated');
        })
    })  
});

module.exports = routes;