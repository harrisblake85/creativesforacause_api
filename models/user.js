const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

username: {type:String, unique:true,lowercase: true, minlength:2, maxlength:16},

password: {type:String, minlength:2},

admin   : {type:Boolean, default:false},

img     : {type:String}

});

module.exports = mongoose.model('User', userSchema)
