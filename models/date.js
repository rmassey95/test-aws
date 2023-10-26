const mongoose = require("mongoose");
const { Schema } = mongoose;

const DateSchema = new Schema({
    date: String,
});

module.exports = mongoose.model("Date", DateSchema)
