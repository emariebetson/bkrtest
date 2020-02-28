var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    barName: String,
    time: Number,
    lineLength: Number, 
    userId: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ]
});


module.exports = mongoose.model('Posts', PostSchema);