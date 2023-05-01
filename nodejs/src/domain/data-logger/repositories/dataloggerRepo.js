const DataLogger = require("../models/datalogger");

module.exports = {
    create: async data => {
        const datalogger = await DataLogger.findOrCreate(data);
        return datalogger;
     },
    list: async () => {
        const dataloggers = await DataLogger.findAll();
        return dataloggers;
    },
    show: async id => {
        const datalogger = await DataLogger.findByPk(id);
        return datalogger;
    },
    update: async (id, data) => { 
        await DataLogger.update(data, {
            where: {
                id: id,
            }
        });
    },
    delete: async id => { 
        await DataLogger.destroy({
            where: {
                id: id
            }
        });
    },
}