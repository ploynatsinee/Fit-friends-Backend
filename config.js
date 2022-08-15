require("dotenv").config();

const config = {
    mongo: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
    }
}

module.exports = config;