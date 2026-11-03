const Admin = require('../Models/admin')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminRegisteration = async (req,res) =>{
    try {
         const {adminName,email,password} = req.body;

    const isAlreadyRegistered = await Admin.findOne({email});

    if(isAlreadyRegistered){
        res.status(403).json({'msg':'The Admin  is Already Registered'});
    }
       const hashedPassword =await bcrypt.hash(password,Number(process.env.SALT_ROUND || 10));

       const newAdmin = new adminModel({
        adminName,
        email,
        password : hashedPassword
       })

        await newAdmin.save();
      

      const token = jwt.sign({email},"mdefmegnegnogn");
      res.cookie("token",token);
      res.status(200).json({'msg':'Admin login successfully'});
    } catch (error) {
        res.status(401).json({"msg":"Issue in Adding Admin"});
    }
}

module.exports = {AdminRegisteration}