const authRouter = require('./authentication');

module.exports = app => {
    authRouter(app);
}