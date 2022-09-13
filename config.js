require("dotenv").config();

const config = {
    mongo: {
        MONGO_DB_URI: process.env.MONGO_DB_URI,
    }
}

module.exports = config;