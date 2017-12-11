var express = require('express');
var router = express.Router();
var Listing = require('../models/listing.schema');

// var Movie = require('../models/movie.schema');

router.get('/', function(req, res){
    // a get request for all games
    Listing.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

// post new listing
router.post('/', function(req, res){
    var addListing = new Listing(req.body);
    addListing.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;