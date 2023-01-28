const express = require("express");
const jwt = require("jsonwebtoken");
const { CalcBMIModel } = require("../Models/clcbmi.model");

const CalcHistory = express.Router();

  CalcHistory.get("/", async (req, res) => {
  const data = await CalcBMIModel.find();
  res.status(201).send(data)
  });
  
 
module.exports = CalcHistory;
