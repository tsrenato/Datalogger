const DataLoggerController = require('../../src/app/api/contollers/datalogger');
const respHeaders = require('../../src/support/middlewares/respHeaders');

module.exports = app => {
    app.get('/api/dataloggers', respHeaders, DataLoggerController.index);
    app.get('/api/dataloggers/:id', respHeaders, DataLoggerController.show);
    app.post('/api/dataloggers', respHeaders, DataLoggerController.store);
    app.put('/api/dataloggers/:id', respHeaders, DataLoggerController.update);
    app.delete('/api/dataloggers/:id', respHeaders, DataLoggerController.destroy);
}