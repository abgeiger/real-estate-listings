var express = require('express');
var bodyParser = require('body-parser');

require('./modules/mongoose-connection'); // no longer equal to mongooseConnection; changed for deployment
var forRent = require('./routes/forRent.js');
var forSale = require('./routes/forSale.js');

var app = express();

// middleware
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// database connection; commented out when we changed for deployment
// mongooseConnection.connect();

app.use('/forRent', forRent);
app.use('/forSale', forSale);

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});