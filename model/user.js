const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


const logSchema = new Schema({
        firstName: String,
        lastName: String,
        email: String,
        pwd: String,
        dob: String,
        phone: String,
});


const Model = mongoose.model('logSchema', logSchema);
module.exports = Model;