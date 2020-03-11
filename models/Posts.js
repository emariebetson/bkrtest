var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    barName: String,
    urlName: String,
    comment: String, 
    bouncer: String, 
    dayOfWeek: String, 
    formattedDate: String,
    time: Number,
    lineLength: Number, 
    username: String,
    date: String
});


module.exports = mongoose.model('Posts', PostSchema);