var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BarSchema = new Schema({
    barName: String,
    urlName: String,
    posts: [{username: String, time: Number, comment: String, bouncer: String, date: String, dayOfWeek: String, formattedDate: String,}],
});


module.exports = mongoose.model('Bars', BarSchema);
