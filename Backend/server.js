require('dotenv').config();
const express = require('express');
const app = express();


const adminRoute = require('./routes/admin.js')
const userRoute = require('./routes/user.js')
const ownerRoute = require('./routes/owner.js')
const cors = require('cors');
const dbConnect = require('./Utils/db.js')
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Home Route");
})
app.use('/admin',adminRoute);
app.use('/user',userRoute)
app.use('/owner',ownerRoute)

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
    dbConnect()
})