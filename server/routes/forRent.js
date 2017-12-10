var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema.js');

// var Movie = require('../models/movie.schema');

router.get('/', function(req, res){
    // a get request for all rentals
    Rental.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

// router.post('/', function(req, res){
//     // a get request for all games
//     var addMovie = new Movie(req.body);
//     addMovie.save(function(errorMakingDatabaseQuery, data){
//         if (errorMakingDatabaseQuery) {
//             console.log('error with game find', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(200);
//         }
//     });
// });

module.exports = router;