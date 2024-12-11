const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
    themename: { type: String, required: true },
    img: { type: String, required: true },
    colors: { type: String, required: true }
});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = Theme;
