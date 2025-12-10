const mongoose = require('mongoose');


const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://saikrishnavegi30_db_user:DrsXXpodCjCmKSTL@cluster0.2zhqsdb.mongodb.net/");
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Mongodb connection failed", error);
        process.exit(1)
    }
};

module.exports = connectToDB;