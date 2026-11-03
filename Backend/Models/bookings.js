const mongoose=require("mongoose");

const bookingSchema=mongoose.Schema({
    startDate:{
        type:Date,
        default:Date.now,
        required:true
    },
    endDate:{
         type:Date,
        required:true
    },
    shortMessage:{
        type:String,
        required:true
    },
    listingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },
    userId:{//user id of the customer who booked the service 
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:["accepted","rejected","pending"],
        default:"pending"
    },
     completionStatus:{
        type:String,
        default:"ongoing",
        enum:["completed","ongoing"]
    },
    itemStatus:{
        type:String,
        default:"not-returned",
        enum:["returned","not-returned"]
    }

},
{
    timestamps:true
})

module.exports=mongoose.model("Booking",bookingSchema);