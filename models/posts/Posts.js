var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    barName: String,
    time: 
        {
        Type: Date,
        default: Date.now
        },
    
    lineLength: Number, 
    usedId: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ]
});


module.exports = mongoose.model('Posts', PostSchema);