const express = require('express');

const routes = express.Router();

routes.get('/', (req,res) => {
    // res.send('GET request received');
    req.getConnection((err, conn) => {
        if(err) return res.send(err)




    })
    
});

module.exports = routes;