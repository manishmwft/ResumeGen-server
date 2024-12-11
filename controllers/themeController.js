const Theme = require("../models/Theme");

exports.getThemes = async (req, res) => {
    try {
        const themes = await Theme.find({});
        res.status(200).json(themes);
    } catch (error) {
        res.status(500).json({ error: "Unable to fetch themes" });
    }
};

exports.createTheme = async (req, res) => {
    const { themename, img, colors } = req.body;
    try {
        const newTheme = new Theme({ themename, img, colors });
        await newTheme.save();
        res.status(201).json(newTheme);
    } catch (error) {
        res.status(500).json({ error: "Unable to create theme" });
    }
};
