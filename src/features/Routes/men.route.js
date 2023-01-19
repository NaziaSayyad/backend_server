const express = require("express");
const menData = require("../Models/men.model");
const menRouter = express.Router();

menRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new menData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
menRouter.get("/", async (req, res) => {
  let data = await menData.find({});
  res.send(data);
});

module.exports = menRouter;
