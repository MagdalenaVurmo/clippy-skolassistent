const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// POST /api/auth/register - Registrera en ny användare
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Alla fält måste fyllas i",
      });
    }
      // Kontrollera om användaren redan finns
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "En användare med den här e-postadressen finns redan",
      });
    }
    // Hasha lösenordet innan det sparas i databasen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Skapa den nya användaren i databasen
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // Skicka tillbaka en token och användarinformation (utan lösenord förstås) OBS! Vid lyckad registrering
    res.status(201).json({
      message: "Användare skapad",
      token: createToken(user._id),
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ // Vid fel så visas detta message här nedanför.
      message: "Något gick fel vid registrering",
      error: error.message,
    });
  }
};

// Logga in användare

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username och lösenord krävs",
      });
    }
    
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: "Felaktigt username eller lösenord",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Felaktigt username eller lösenord",
      });
    }

    res.status(200).json({
      message: "Inloggning lyckades",
      token: createToken(user._id),
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Något gick fel vid inloggning",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};