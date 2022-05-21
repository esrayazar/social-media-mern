const mongoose = require('mongoose')
let uuidv1 = require('uuidv1')
const crypto = require('crypto');
 
console.log(uuidv1())

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required: true
    },
    email:{
        type:String,
        trim:true,
        required: true
    },
    hashed_password:{
        type:String,
        required: true
    },
    salt:String,
    created:{
        type: Date,
        default:Date.now
    },
    updated:Date
})

//virtual field
userSchema.virtual('password')
.set(function(password){
    //create temproray variable called _password
    this._password = password
    //generate a timestamp
    this.salt = uuidv1()
    //encyryptPassword
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password
})
//methods
userSchema.methods={
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password

    },
    encryptPassword: function(password){
        if(!password) return "";
        try{
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
console.log(hash);
        }catch (err){
            return ""
        }
    }
}


module.exports = mongoose.model("User", userSchema )