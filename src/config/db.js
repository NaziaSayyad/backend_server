const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://Nazia:Dob1062000@cluster0.p4xc33c.mongodb.net/Blogging?retryWrites=true&w=majority",
    {useNewUrlParser: "true",
  useUnifiedTopology: "true"}
  )
};
module.exports = connect;
