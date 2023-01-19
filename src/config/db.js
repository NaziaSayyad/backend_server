const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://nazia:Dob1062000@cluster0.g7iogse.mongodb.net/Mock",
    {useNewUrlParser: "true",
  useUnifiedTopology: "true"}
  )
};
module.exports = connect;
