const mongoose = require('mongoose');

const AdminMySchema = new mongoose.Schema({
   
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

module.exports=mongoose.model("AdminMy",AdminMySchema);

