const DataLoggerController = require('../../src/app/api/contollers/datalogger');

module.exports = app => {
    app.get('/api/dataloggers', DataLoggerController.index);
    app.get('/api/dataloggers/:id', DataLoggerController.show);
    app.post('/api/dataloggers', DataLoggerController.store);
    app.post('/api/dataloggers/log', DataLoggerController.log);
    app.put('/api/dataloggers/:id', DataLoggerController.update);
    app.delete('/api/dataloggers/:id', DataLoggerController.destroy);
}