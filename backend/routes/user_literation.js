const express = require("express");
const UserLiteration = require("../models/UserLiteration");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await UserLiteration.find({})
      .populate({
        path: "user",
        select: "_id name",
      })
      .populate({
        path: "literation",
        select: "_id title",
      });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.get("/literation_added/:userId/:literationId", async (req, res) => {
  const userId = req.params.userId;
  const literationId = req.params.literationId;
  try {
    const data = await UserLiteration.find({ user: userId, literation: literationId })
      .populate({
        path: "user",
        select: "_id name",
      })
      .populate({
        path: "literation",
        select: "_id title",
      });
    if (data.length == 0) {
      res.status(200).json(null);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      message: "Error",
    });
  }
});

router.post("/", async (req, res) => {
  const { user, literation } = req.body;
  const userLiteration = new UserLiteration({
    user,
    literation,
    status: 1,
  });
  try {
    const saveUserLiteration = await userLiteration.save();
    res.json(saveUserLiteration);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create user literation",
    });
  }
});

router.put("/literation_added/:id", async (req, res) => {
  const { status } = req.body;
  try {
    const data = await UserLiteration.updateOne(
      { _id: req.params.id },
      {
        status,
      }
    );

    if (!data) {
      res.status(400).json("cek error");
    } else {
      const dataUserLiteration = await UserLiteration.findById(req.params.id)
        .populate({
          path: "user",
          select: "_id name",
        })
        .populate({
          path: "literation",
          select: "_id title",
        });
      res.status(200).json(dataUserLiteration);
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to create user literation",
    });
  }
});
module.exports = router;
