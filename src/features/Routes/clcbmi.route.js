const express = require("express");
const jwt = require("jsonwebtoken");
const { CalcBMIModel } = require("../Models/clcbmi.model");

const CalculateBMIRoute = express.Router();

  CalculateBMIRoute.get("/", async (req, res) => {
  const data = await CalcBMIModel.find();
  res.status(201).send(data)
  });
  
  CalculateBMIRoute.post("/", async (req, res) => {
    
    const { height, weight } = req.body;
    console.log(height, weight);
    let cal = Math.floor(weight / height);
    cal = parseFloat(cal).toFixed(2);
    const postData =  await new CalcBMIModel({height,weight, calculated : cal});
    await postData.save();
    res.send(cal);
    // try {
    //     const {h, w} = req;
    //     const cal = (h / w);
    //     console.log(cal);
    //     cal = parseFloat(cal).toFixed(2);
        // const postData =  await new CalcBMIModel({height:h, weight : w, calculated : cal});
        // await postData.save();
    //     res.status(201).send(cal); 

    //   } catch (e) {
    //     res.send(e.message);
    //   }

  });

  
   
module.exports = CalculateBMIRoute;
