module.exports = (app, express) => {
    const router = express.Router();
    /** API Routes */
    require('./api')(app, router);
}