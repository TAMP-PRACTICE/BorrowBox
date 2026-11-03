const User=require("../Models/user.js");
const Listing=require("../Models/listings.js")

const registerListings=async (req,res)=>{

    try{
    const {title,category,description,images,price}=req.body;
    const user=req.cookies.userLoginToken;
    if(!user){
       return res.status(404).send("User login required");
    }
    const owner=await User.find({email:user});
    if(!owner)
    {
        return res.status(401).send("User does not exists");
    }
    const listing={
        title,
        category,
        description,
        images,
        price,
        owner:owner._id
    }

    await User.insertOne(listing);

    res.status(200).send("Item registered successfully");   

}catch(err){
    console.log("Internal server error",err);
    return res.status(500).send("Internal server error");
}
}

module.exports={registerListings};