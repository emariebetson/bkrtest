var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BarSchema = new Schema({
    barName: String,
    posts: [{username: String, time: Number}],
});


module.exports = mongoose.model('Bars', BarSchema);
