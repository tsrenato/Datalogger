const LogsController = require('../../src/app/api/contollers/Logs');
const respHeaders = require('../../src/support/middlewares/respHeaders');

module.exports = app => {
    app.post('/api/logs', respHeaders, LogsController.store);
    app.get('/api/logs/datalogger/:datalogger', respHeaders, LogsController.datalogger_all);
    app.get('/api/logs/:hash', respHeaders, LogsController.hash_logs);
}