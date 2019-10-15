const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const profileSchema = new Schema({
        username: String,
        email: String,
        pwd: String,
})
const logSchema = new Schema({
       profile: profileSchema
});


const Model = mongoose.model('logSchema', logSchema);
module.exports = Model;