const jwt=require("jsonwebtoken");
const secretKey=process.env.JWTSECRET;

const jwtUserMiddleware=async(req,res,next)=>{

    const userLoginToken=req.cookies.userLoginToken;

    if(!userLoginToken){
        res.status(404).send("Login required");
    }

    try{
        const user=jwt.verify(userLoginToken,secretKey);

        if(!user){
            return res.status(401).send("session expired");
        }

        req.userLogin=user;
        console.log("Login Token verified");
        next();

    }catch(err){
        console.log("Error occured in jwt of student login",err);
            res.status(500).send("Error occured in jwt of student login");
    }
}

module.exports={jwtUserMiddleware}
