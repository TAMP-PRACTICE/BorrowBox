const mongoose=require("mongoose");

const listingSchema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["Electronics","Furniture"]
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    location:{
        address:{
            type:String,
            required:true
        },
        coordinates:{
            lat:{type:Number},
            lon:{type:Number}
        }
    },
    status:{
        type:String,
        enum:["booked","available"],
        default:"available"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("Listing",listingSchema);