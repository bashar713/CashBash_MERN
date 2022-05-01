const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Schema
const userSchema = mongoose.Schema(
    {
        firstName:{
            required: [true,'First Name is required'],
            type: String,
        },
        lastName:{
            required: [true,'Last Name is required'],
            type: String,
        },
        email:{
            required: [true,'Email is required'],
            type: String,
        },
        password:{
            required: [true,'Password is required'],
            type: String,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        }
    },
    {
        timestamp: true,
    } 
); 

//Hash password
userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
});

//Verify password
userSchema.methods.isPasswordMatch = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model('User',userSchema);
module.exports = User;

