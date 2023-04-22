const cors = require('cors');

const config = {
    origin: '*',
    methods: ['GET','HEAD','PUT','POST','DELETE','OPTIONS']
};

module.exports = (app) => {
    app.use(cors(config));
}