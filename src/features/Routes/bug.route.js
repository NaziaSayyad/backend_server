const express = require("express");
const { BugsModel } = require("../Models/bug.model");
const bugRoute = express.Router();

bugRoute.get("/", async (req, res) => {
    let data = await BugsModel.find({});
    res.send(data);
  });
  
  bugRoute.post("/", async (req, res) => {
    try {
        const { body } = req;
        const postData = new BugsModel(body);
        await postData.save();
        res.send("succesfully added");
      } catch (e) {
        res.send(e.message);
      }

  });
   
module.exports = bugRoute;
