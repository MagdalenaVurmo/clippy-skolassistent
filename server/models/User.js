
//Mongoose schema för användare 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"], // Username måste fyllas i för att kunna skapa användare!
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Måste fylla i Email, annars kommer det inte att funka att skapa användare.
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"], //Måste fylla i lösenord!
      minlength: 6,
    },
  },
  {
    timestamps: true, // Den håller koll på när användaren skapades och uppdaterades.
  }
);

module.exports = mongoose.model("User", userSchema);