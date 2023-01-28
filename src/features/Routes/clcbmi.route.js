const express = require("express");
const jwt = require("jsonwebtoken");
const { CalcBMIModel } = require("../Models/clcbmi.model");

const CalculateBMIRoute = express.Router();

  CalculateBMIRoute.get("/", async (req, res) => {
  const data = await CalcBMIModel.find();
  res.status(201).send(data)
  });
  
  CalculateBMIRoute.post("/", async (req, res) => {
    
    try {
        const {h, w} = req;
        const cal = Number(Number(h) * Number(w));
        const postData =  await new CalcBMIModel({height:h, weight : w, calculated : cal});
        await postData.save();
        res.status(201).send({h , w }); 

      } catch (e) {
        res.send(e.message);
      }

  });

  CalculateBMIRoute.delete("/:id", async (req,res) =>{
    const {id} =req.params;
      try{
        await BugsModel.findByIdAndDelete({_id:id})
      res.send({msg: "Deleted Successfully"})
      }
      catch(err){
        res.send(err)
      }
  });
   
   
   
module.exports = CalculateBMIRoute;
