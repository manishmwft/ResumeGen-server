const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    personal: {
        image: String,
        technicalskill: Array,
        interests: Array,
        // Add more fields as needed
    },
    experience: Array,
    project: Array,
    course: Array,
    education: Array
});

const User = mongoose.model("User", userSchema);

module.exports = User;
