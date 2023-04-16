const { DB } = require('../config/database');

(async () => {
    await DB.sync();
    console.log('Database models have been successfully synced.');
})();