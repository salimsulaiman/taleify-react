const express = require("express");
const router = express.Router();

const Literation = require("../models/Literation");

router.get("/", async (req, res) => {
  try {
    const data = await Literation.find({}).populate("author").populate("genre");
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
    const data = await Literation.findById(req.params.id).populate("author").populate("genre").exec();
    if (!data) {
      return res.status(404).json({
        status: res.statusCode,
        message: "Literation not found",
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
