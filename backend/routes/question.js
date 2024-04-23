const express = require("express");
const router = express.Router();

const Question = require("../models/Question");
const Literation = require("../models/Literation");

router.get("/", async (req, res) => {
  try {
    const data = await Question.find({}).populate({
      path: "story",
      select: "_id literation subTitle",
      populate: {
        path: "literation",
        model: Literation,
        select: "_id title",
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/story/:id", async (req, res) => {
  try {
    const data = await Question.findOne({ story: req.params.id })
      .populate({
        path: "story",
        select: "_id literation subTitle",
        populate: {
          path: "literation",
          model: Literation,
          select: "_id title",
        },
      })
      .exec();
    if (!data) {
      return res.status(404).json({
        status: res.statusCode,
        message: "Story not found",
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

module.exports = router;
