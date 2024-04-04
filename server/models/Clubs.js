const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "this is required!"
    },
    image: {
        type: String,
        required: "this is required!"
    },
    description: {
        type: String,
        required: "this is required!"
    }
});

module.exports = mongoose.model("Clubs", clubSchema);