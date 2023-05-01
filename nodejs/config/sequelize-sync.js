const { DB } = require('./database');

(async () => {
    await DB.sync();
    console.log('Database models have been successfully synced.');
})();