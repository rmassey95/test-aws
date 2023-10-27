const mongoose = require("mongoose");

let mongodbURI = process.argv[process.argv.length - 1];

const Datetime = require("./models/datetime");
const cron = require("node-cron");

const updateTime = async () => {
    mongoose.connect(mongodbURI);

    const dateSave = new Date();
    const date = new Datetime({ datetime: dateSave });
    await date.save();

    mongoose.connection.close();
};

cron.schedule("* * * * *", updateTime);
