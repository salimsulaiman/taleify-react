const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { verifyToken } = require("./verifytoken");
const UserPoint = require("../models/UserPoint");

router.get("/", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/userdetail", verifyToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const data = await User.findById(userId).select("_id name email picture createdAt updatedAt");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id).select("_id name email picture createdAt updatedAt");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

const checkEmailExist = async (email) => {
  const emailExist = await User.findOne({ email });
  return emailExist !== null;
};

// register
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // check if email already exist
  const emailExist = await checkEmailExist(email);

  if (emailExist) {
    return res.status(400).json({ message: "Email already exists" });
  }
  // hash password

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashPassword,
    picture: `https://api.dicebear.com/7.x/initials/svg?seed=${name}&size=256`,
  });

  try {
    const saveUser = await user.save();

    if (saveUser) {
      const userId = saveUser._id;
      const userPoint = new UserPoint({
        user: userId,
        point: 0,
      });

      const saveUserPoint = await userPoint.save();

      res.json({ user: saveUser, saveUserPoint });
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to register",
    });
  }
});

// login
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // if email exist
  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Invalid Email",
    });
  }

  // check password
  const validPwd = await bcrypt.compare(password, user.password);
  if (!validPwd) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Invalid Password",
    });
  }

  // create token
  const token = jwt.sign(
    {
      _id: user._id,
      iss: "Taleify",
      aud: "frontend",
      exp: parseInt(new Date().getTime() / 1000 + 12 * 60 * 60),
    },
    process.env.SECRET_KEY
  );

  res.header("authuser", token).json({
    id: user._id,
    token: token,
  });
});

router.put("/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    await User.findByIdAndUpdate(id, {
      name,
      email,
      picture: `https://api.dicebear.com/7.x/initials/svg?seed=${name}&size=256`,
    }).then(
      res.status(200).json({
        status: res.statusCode,
        message: "Success",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
