const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        enum:["owner","customer"]
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
    contact:{
            type:String,          
    },
    borrowHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },
   
},
{
    timestamps:true
}
)

module.exports=mongoose.model("User",userSchema);