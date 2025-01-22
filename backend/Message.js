const mongoose = require("mongoose");

const messageschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    message: { type: String, required: true },
})

module.exports = mongoose.model("message", messageschema);