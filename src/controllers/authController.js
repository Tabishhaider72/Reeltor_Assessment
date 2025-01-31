const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const { validateEmail, validatePassword } = require("../utils/validate");

exports.register = async (req, res) => {
  const { email, password, name, mobile } = req.body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ msg: "Invalid email or password format" });
  }

  try {
    const userRef = db.collection("users").doc(email);
    const userSnap = await userRef.get();

    if (userSnap.exists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userRef.set({ email, password: hashedPassword, name, mobile, bio: "", availability: true });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ msg: "Invalid email or password format" });
  }

  try {
    const userRef = db.collection("users").doc(email);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      return res.status(400).json({ msg: "User not found" });
    }

    const user = userSnap.data();
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};