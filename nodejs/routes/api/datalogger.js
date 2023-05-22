const DataLoggerController = require('../../src/app/api/contollers/datalogger');
const apiAuthorization = require('../../src/support/middlewares/apiAuthorization');
const respHeaders = require('../../src/support/middlewares/respHeaders');

module.exports = app => {
    app.get('/api/dataloggers', respHeaders, apiAuthorization, DataLoggerController.index);
    app.get('/api/dataloggers/:id', respHeaders, apiAuthorization, DataLoggerController.show);
    app.post('/api/dataloggers', respHeaders, apiAuthorization, DataLoggerController.store);
    app.put('/api/dataloggers/:id', respHeaders, apiAuthorization, DataLoggerController.update);
    app.delete('/api/dataloggers/:id', respHeaders, apiAuthorization, DataLoggerController.destroy);
}