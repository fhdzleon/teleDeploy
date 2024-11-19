const app = require("./src/app")
const http = require("http")
const logger = require("./src/utils/logger")
const config = require("./src/utils/config")

const server = http.createServer(app);


server.listen(config.PORT, () => {
    logger.info(`✅ Servidor corriendo en el puerto ${config.PORT}`)
})