var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var forRent = require('./routes/forRent');
var forSale = require('./routes/forSale');

var port = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/forRent', forRent);
app.use('/forSale', forSale);

app.listen(port, function(){
    console.log('listening on port', port);  
});