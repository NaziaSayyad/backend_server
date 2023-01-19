require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const userRoute = require("./src/features/Routes/user.route");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(8080, async () => {
  await connect();
  // console.log("Listening on at http://localhost:8080");
});
