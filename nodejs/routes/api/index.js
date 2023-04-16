const dataLoggerRouter = require('./datalogger');

module.exports = app => {
    dataLoggerRouter(app);
}