var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var forRent = require('./routes/forRent.js');
var forSale = require('./routes/forSale.js');

var app = express();

// middleware
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// database connection
mongooseConnection.connect();

app.use('/forRent', forRent);
app.use('/forSale', forSale);

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});