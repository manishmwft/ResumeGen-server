const User = require("../models/User");

exports.getUser = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user data" });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, personal, experience, project, course, education } = req.body;
    try {
        const newUser = new User({ name, email, personal, experience, project, course, education });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};
