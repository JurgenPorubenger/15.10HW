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
logSchema.methods.reversePassword = function () {
        return this.pwd.split("").reverse().join("");
};

const Model = mongoose.model('logSchema', logSchema);
module.exports = Model;