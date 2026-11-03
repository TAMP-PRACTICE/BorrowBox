require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL || 'mongodb+srv://mahibasati71_db_user:ajSnEuhJlq4MGxEo@vyntra-instagram-inspir.ggf4eqa.mongodb.net/'
console.log(process.env.SMTP_USER)
console.log(process.env.MONGODB_URL)
const dbConnect =async()=>{
    try {
      await mongoose.connect(URL);
      console.log('db Connected successfully');
      
    } catch (error) {
        console.log(error);
  
    }
}

module.exports = dbConnect;