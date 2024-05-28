const express = require("express");
const router = express.Router();

const Rating = require("../models/Rating");

router.get("/", async (req, res) => {
  try {
    const data = await Rating.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/literation/:literationId", async (req, res) => {
  try {
    const data = await Rating.find({ literation: req.params.literationId });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/user_literation/:user/:literation", async (req, res) => {
  const { user, literation } = req.params;
  try {
    const data = await Rating.findOne({ user: user, literation: literation });
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json(null);
  }
});

router.post("/", async (req, res) => {
  const { rating, literation, user } = req.body;

  const data = new Rating({
    rating,
    literation,
    user,
  });
  try {
    const saveRating = await data.save();
    res.json(saveRating);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create story",
    });
  }
});

module.exports = router;
