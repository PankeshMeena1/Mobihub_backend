const mongoose = require('mongoose'); 
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        default:"user"
    }
});

userSchema.pre("save", async function (next){
    const salt = bcrypt.genSaltSync(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    
});

userSchema.methods.isPasswordMatched = async function(enterdpassword){
    return await bcrypt.compare(enterdpassword, this.Password);
}

//Export the model
module.exports = mongoose.model('User', userSchema);