const User = require('../Models/user.js')

const userRegisteration = async (req,res) =>{
    try {
         const {username,email,password,userType,contact,borrowHistory} = req.body;
   
        const isUserAlreadyRegistered = await User.findOne({email});
        if(isUserAlreadyRegistered){
            res.status(403).json({"msg": "user Already registered"})
        }
        const hashedPassword =await bcrypt.hash(password,Number(process.env.SALT_ROUND || 10));

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            userType,
            contact,
            borrowHistory
        })
    }

     catch (error) {
        res.status(401).json({"msg":"Issue in Adding Admin"});
    }
}

