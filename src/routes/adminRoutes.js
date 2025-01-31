const express = require("express");
const { sendAdminNotification } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/notify", authMiddleware, sendAdminNotification);

module.exports = router;
