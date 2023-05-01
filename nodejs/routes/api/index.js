const dataLoggerRouter = require('./datalogger');
const logsRouter = require('./logs');
const usersRouter = require('./users');

module.exports = app => {
    dataLoggerRouter(app);
    usersRouter(app);
    logsRouter(app);
}