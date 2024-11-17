const mongoose = require("mongoose");
const config = require("../utils/config");
const logger = require("../utils/logger");

const connectToDatabase = () => {
    mongoose.connect(config.MONGO_URI)
    .then(() => {
        logger.info("✅ base de datos conectada");
    })
    .catch((error) => {
        logger.error("❌ Error al conectar base de datos:", error.message);
      });
}

module.exports = { connectToDatabase };