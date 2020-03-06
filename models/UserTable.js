var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserTableSchema = new Schema({
    username: String, 
    password: String
});


module.exports = mongoose.model('UserTable', UserTableSchema);