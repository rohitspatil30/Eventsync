const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "this is required",
    },
    password: {
        type: String,
        required: "this is required",
    },


});

module.exports = mongoose.model("Users", userSchema);


