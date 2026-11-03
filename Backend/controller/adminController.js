const adminModel = require('../Models/admin')

const AdminRegisteration = async (req,res) =>{
    try {
         const {adminName,email,password} = req.body;

    const isAlreadyRegistered = await adminModel.findOne({email});

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
       res.status(200).send("student added successfully")
    } catch (error) {
        res.status(401).json({"msg":"Issue in Adding Admin"});
    }
}

module.exports = {AdminRegisteration}