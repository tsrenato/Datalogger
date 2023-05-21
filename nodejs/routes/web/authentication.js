const Authentication = require("../../src/app/web/controllers/Authentication");
const respHeaders = require("../../src/support/middlewares/respHeaders");


module.exports = app => {
    app.post('/sign-in', respHeaders, Authentication.signIn);
    app.get('/validate', respHeaders, Authentication.validate);
}