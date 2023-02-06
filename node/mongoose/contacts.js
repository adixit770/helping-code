const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    age:String
});
module.exports = mongoose.model('details',contactSchema);