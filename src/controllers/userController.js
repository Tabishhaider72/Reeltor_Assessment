const db = require("../config/db");

exports.getProfile = async (req, res) => {
  const email = req.user.email;
  try {
    const userSnap = await db.collection("users").doc(email).get();
    if (!userSnap.exists) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(userSnap.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const email = req.user.email;
  try {
    await db.collection("users").doc(email).update(req.body);
    res.json({ msg: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};