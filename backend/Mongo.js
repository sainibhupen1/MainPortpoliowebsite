require('dotenv').config();
const mongoose = require("mongoose");

const mongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb Connected");
    } catch (error) {
        console.log("mongodb not connected");
    }
}

module.exports = mongo