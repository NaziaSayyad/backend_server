const mongoose = require("mongoose");

const BMISchema = mongoose.Schema({
   height: Number,
   weight : Number,
   calculated:Number
});

const CalcBMIModel = mongoose.model('calbmi', BMISchema);

module.exports = {
    CalcBMIModel
};