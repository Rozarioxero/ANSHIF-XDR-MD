const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aM11BJ7A#gqQ3AZesFfI2JzoVV1HuLCgWx_Bdq7gY6A_KO6yJwmM",
MONGODB: process.env.MONGODB || "mongodb+srv://rush:20041025sa@clust era.ysi6dsf.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_4270.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"
};
