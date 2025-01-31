const db = require("../config/db");
const { validateEmail } = require("../utils/validate");

exports.sendAdminNotification = async (req, res) => {
  const { recipients, message, critical } = req.body;

  if (!Array.isArray(recipients) || !recipients.every(validateEmail)) {
    return res.status(400).json({ msg: "Invalid recipients format" });
  }

  try {
    const notifications = recipients.map((email) =>
      db.collection("notifications").add({ email, message, status: critical ? "immediate" : "pending" })
    );
    await Promise.all(notifications);
    res.json({ msg: "Admin notifications sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};