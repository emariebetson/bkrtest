var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    barName: String,
    time: Number,
    lineLength: Number, 
    username: String,
    date: String
});


module.exports = mongoose.model('Posts', PostSchema);