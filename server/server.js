const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json
app.set( 'port', process.env.PORT || 3001 );
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})