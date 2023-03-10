const express = require("express");
const  argon2  = require("argon2");
const UserSchema = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const {  email, password } = req.body;
    const hash = await argon2.hash(password);
    console.log(hash);
    let oldUser = await UserSchema.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "already" });
    }

    const user = new UserSchema({ email, password: hash });
    await user.save();
    res.send({ msg: "success" });
    
  } catch (e) {
    res.send(e.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserSchema.findOne({ email });
    if (user) {
      let check_email = user.email;
      if (check_email == email) {
        const token = jwt.sign({ userID: user._id }, "hush");
        res.send({ msg: "success", token: token });
      } else {
        res.send({ msg: "incorrect password" });
      }
    } else {
      res.send({ msg: "email not resgisterd" });
    }
  } catch (e) {
    res.send(e.message);
  }
});
userRouter.post("/logout", async(req,res) =>{
  const token = req.headers["authorization"];
   if(token){
    res.send("Logout Sucessfull")
   }
  
})

userRouter.get("/", async(req,res) =>{
  const token = req.headers["authorization"];
  try {
    if (token) {
      const decoded = jwt.decode(token);
      const find_id = decoded.userID;
      let user = await UserSchema.findOne(
        { _id: find_id });
      res.send(user);
    }
  } catch (e) {
    res.send(e.message);
  }
  
})

module.exports = userRouter;
