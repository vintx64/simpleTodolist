const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

      const eventSchema = new Schema({
        name : {
            type : String , 
            required : true , 
            unique:true,
            maxlength : 100
        }
    });
const eventModel = mongoose.model('Event' , eventSchema);
module.exports = eventModel;
