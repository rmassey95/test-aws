const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.h4dzasn.mongodb.net/");

const Date = require("./models/date");

const main = async () => {
    const date = new Date({ date: "10/12/2023" });
    await date.save();
    mongoose.connection.close();
};

main();
