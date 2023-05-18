module.exports = (app, express, path) => {
    const router = express.Router();
    /** API Routes */
    require('./api')(app, router);

    app.use(express.static(path.resolve(__dirname, '../../reactjs/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../reactjs/dist', 'index.html'));
    });
}