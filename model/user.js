const mongoose = require('mongoose');
const  Schema = mongoose.Schema;




const profileSchema = new Schema({
        firstName: String,
        lastName: String,
        email: String,
        pwd: String,
        dob: String,
        phone: String,
});
const logSchema = new Schema({
       profile: Object
});


const Model = mongoose.model('logSchema', logSchema);
module.exports = Model;