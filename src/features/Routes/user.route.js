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

userRouter.get("/", async(req,res) =>{
  const user = await UserSchema.find();
  res.status(201).send(user);
})

module.exports = userRouter;
