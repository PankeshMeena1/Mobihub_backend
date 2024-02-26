const mongoose = require('mongoose');
//const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    // Name: {
    //     type: String,
      
    // },
    // LastName: {
    //     type: String,
    
    // },
    // Email: {
    //     type: String,
    
    // },
    // Password: {
    //     type: String,
    
    // },
    // Address: {
    //     type: String,
        
    // },
    // Role: {
    //     type: String,
    //     default: "user"
    // },
    Product_Name:{
        type:String,
        required:true
     },
     Product_Price:{
        type:String,
        required:true
     },
     Product_Regular_Price:{
        type:String,
        required:true
     },
     Product_RAM:{
        type:String,
        required:true
     },
     Product_ROM:{
        type:String,
        required:true
     },
     Image_URL:{
        type:String,
        required:true
     }
});

// userSchema.pre("save", async function (next) {
//     const salt = bcrypt.genSaltSync(10);
//     this.Password = await bcrypt.hash(this.Password, salt);

// });

// userSchema.methods.isPasswordMatched = async function (enterdpassword) {
//     return await bcrypt.compare(enterdpassword, this.Password);
// }

//Export the model
module.exports = mongoose.model('User', userSchema);