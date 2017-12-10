var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var forSaleSchema = new Schema({
    cost: {type: Number},
    sqft: {type: Number},
    city: {type: String},
});

module.exports = mongoose.model('ForSale', forSaleSchema);