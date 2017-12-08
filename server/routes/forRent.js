var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

// router.get('/', function (req, res) {
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('error', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query('SELECT * FROM power ORDER BY id;', function (errorMakingDatabaseQuery, result) {
//                 done();
//                 if (errorMakingDatabaseQuery) {
//                     console.log('error', errorMakingDatabaseQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.send(result.rows);
//                 }
//             });
//         }
//     });
// });

// router.post('/', function (req, res) {
//     var newPower = req.body;
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('error', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query(`INSERT INTO power (name, description) VALUES ($1, $2);`, [newPower.name, newPower.description], function (errorMakingDatabaseQuery, result) {
//                 done();
//                 if (errorMakingDatabaseQuery) {
//                     console.log('error', errorMakingDatabaseQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(201);
//                 }
//             });
//         }
//     });
// });

// router.put('/', function (req, res) {
//     var power = req.query;
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('error', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query(`UPDATE power 
//                         SET name=$1, description=$2 
//                         WHERE id=$3;`, [power.name, power.description, power.id], function (errorMakingDatabaseQuery, result) {
//                 done();
//                 if (errorMakingDatabaseQuery) {
//                     console.log('error', errorMakingDatabaseQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(204);
//                 }
//             });
//         }
//     });
// });

module.exports = router;