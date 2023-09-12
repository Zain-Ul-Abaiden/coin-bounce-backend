const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');


const dbConnect = async () => {
    console.log("Enter in database connection");
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Databse connected to host ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = dbConnect;