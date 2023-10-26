const mongoose = require("mongoose");
const { Schema } = mongoose;

const DatetimeSchema = new Schema({
    datetime: Date,
});

module.exports = mongoose.model("Datetime", DatetimeSchema)
