const express = require("express");
const { getUser, createUser } = require("../controllers/userController");

const router = express.Router();

router.get("/user/:email", getUser);
router.post("/user", createUser);

module.exports = router;
