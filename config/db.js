const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb connection successful`);
        
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`)
        
    }
}



module.exports = connectDB;