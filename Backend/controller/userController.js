const Listing=require("../Models/listings.js");
const Booking=require("../Models/bookings.js");
const User=require("../Models/user.js");
const bookItem=async(req,res)=>{

    try{
    const {startDate,endDate,shortMessage}=req.body;
    const id=req.params;
    const user=req.cookies.userLoginToken;

    if(!user){
        return res.status(404).send("User login required");
    }
    
    const getUser=await User.find({user});
    if(!getUser)
    {
        return res.status(404).send("User does not exists");
    }

    const listing=await Listing.find({id});
        if(listing.status=="booked"){
            return res.status(404).send("Item is already booked");
        }

        const book={
                startDate,
                endDate,
                shortMessage,
                listingId:id,
                userId:getUser._id
        }

        await Booking.insertOne(book);

    }catch(err){
            console.log("internal server error",err);
            return res.status(500).send("Internal server error");
    }
}

module.exports={bookItem}