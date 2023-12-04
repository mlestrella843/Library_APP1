const express = require('express');

const router = express.Router();

//*First route-endpoint
router.get('/login', (req, res) => {
    // res.send( "Welcome to my LIbrary App!!!!!!" );
    res.render("index");
});
router.get('/register', (req, res) => {
    // res.send( "Welcome to my LIbrary App!!!!!!" );
    res.render("register");
});

module.exports = router;