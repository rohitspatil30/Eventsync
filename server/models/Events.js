const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "this is required!"
    },
    description: {
        type: String,
        required: "this is required!"
    },
    host: {
        type: String,
        required: "this is required!"
    },
    date: {
        type: String,
        required: "this is required!"
    },
    time: {
        type: String,
        required: "this is required!"
    },
    contact: {
        type: String,
        required: "this is required!"
    },
    image: {
        type: String,
        required: "this is required!"
    },
    venue: {
        type: String,
        required: "this is required!"
    },
    fees: {
        type: String,
        required: "this is required!"
    },
    link: {
        type: String,
        required: "this is required!"
    },
});

eventSchema.index({ name: "text", description: "text" });
eventSchema.index({ "$**": "text" });

module.exports = mongoose.model("Events", eventSchema);