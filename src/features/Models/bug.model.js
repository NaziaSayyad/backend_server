const mongoose = require("mongoose");

const BugsSchema = mongoose.Schema({
    bug: String,
    category: String,
    userID : String
});

const BugsModel = mongoose.model('bug', BugsSchema);

module.exports = {
    BugsModel
};