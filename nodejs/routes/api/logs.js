const LogsController = require('../../src/app/api/contollers/Logs');
const apiAuthorization = require('../../src/support/middlewares/apiAuthorization');
const respHeaders = require('../../src/support/middlewares/respHeaders');

module.exports = app => {
    app.post('/api/logs', respHeaders, apiAuthorization, LogsController.store);
    app.get('/api/logs/datalogger/:datalogger', respHeaders, apiAuthorization, LogsController.datalogger_all);
    app.get('/api/logs/:hash', respHeaders, apiAuthorization, LogsController.hash_logs);
}