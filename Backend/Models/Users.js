const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    roleId: {type: String},
    name:{type: String, required:true},
    password:{type: String, required:true},
    email:{ type:String, required:true, unique:true},
    address:{type: String, required:true},
    phone:{type: String, required:true},
    cnic:{type: String},
    numOfEmployees:{type:String},
    NGOType:{type:String},
    experience:{type:String},
    websiteUrl:{type:String}
})

module.exports = mongoose.model('Users',usersSchema)