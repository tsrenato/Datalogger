
const UsersController = require('../../src/app/api/contollers/Users');
const apiAuthorization = require('../../src/support/middlewares/apiAuthorization');
const respHeaders = require('../../src/support/middlewares/respHeaders');

module.exports = app => {
    app.get('/api/users', respHeaders, apiAuthorization, UsersController.index);
    app.get('/api/users/:id', respHeaders, apiAuthorization, UsersController.show);
    app.post('/api/users', respHeaders, apiAuthorization, UsersController.store);
    app.put('/api/users/:id', respHeaders, apiAuthorization, UsersController.update);
    app.delete('/api/users/:id', respHeaders, apiAuthorization, UsersController.destroy);
}