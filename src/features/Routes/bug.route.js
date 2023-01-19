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

  bugRoute.get("/:id", async (req,res) =>{
    const {id} =req.params;
      try{
        await BugsModel.findByIdAndDelete({_id:id})
      res.send({msg: "Deleted Successfully"})
      }
      catch(err){
        res.send(err)
      }
  });
   
   
   
module.exports = bugRoute;
