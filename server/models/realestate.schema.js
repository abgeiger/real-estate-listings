var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var realestateSchema = new Schema({
    rent: {type: Number},
    sqft: {type: Number},
    city: {type: String},
});

module.exports = mongoose.model('Realestate', realestateSchema);