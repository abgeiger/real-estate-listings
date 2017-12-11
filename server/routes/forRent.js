var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema.js');

// a get request for all rentals
router.get('/', function(req, res){
    Rental.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

// post new rental
router.post('/', function(req, res){
    var addRental = new Rental(req.body);
    addRental.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;