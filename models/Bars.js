var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BarSchema = new Schema({
    barName: String,
    posts: [{username: String, time: Number, date: String}],
});


module.exports = mongoose.model('Bars', BarSchema);
