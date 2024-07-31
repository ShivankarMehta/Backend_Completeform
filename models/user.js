const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Shivankar:vsifGegomRZtudow@cluster0.0d7esc6.mongodb.net/miniproject"
);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilepic: {
    type: String,
    default: "default.jpg",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
