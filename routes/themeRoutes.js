const express = require("express");
const { getThemes, createTheme } = require("../controllers/themeController");

const router = express.Router();

router.get("/themes", getThemes);
router.post("/themes", createTheme);

module.exports = router;
