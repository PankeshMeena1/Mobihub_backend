const AdminModel = require("../models/Admin/Productadd");

const ProductAdd =  (req, res) =>
    {
         const myproduct = new AdminModel(req.body);
         console.log(myproduct);
         myproduct.save();

         res.send("data seccufull seva");
        // console.log(myproduct);
    }

    const DisplayProduct = (req, res)=>
    {
        const mydatadisplay = AdminModel.find().then((data)=>res.json(data));
        console.log(mydatadisplay);
    }

    module.exports = { ProductAdd, DisplayProduct };