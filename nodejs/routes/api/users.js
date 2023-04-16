
const UsersController = require('../../src/app/api/contollers/Users');

module.exports = app => {
    app.get('/api/users', UsersController.index);
    app.get('/api/users/:id', UsersController.show);
    app.post('/api/users', UsersController.store);
    app.put('/api/users/:id', UsersController.update);
    app.delete('/api/users/:id', UsersController.destroy);
}