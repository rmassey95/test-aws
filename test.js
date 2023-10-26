const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.h4dzasn.mongodb.net/");

const Datetime = require("./models/datetime");

const main = async () => {
    const dateSave = new Date();
    const date = new Datetime({ datetime: dateSave });
    await date.save();
    mongoose.connection.close();
};

main();
