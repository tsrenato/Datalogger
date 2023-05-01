const Log = require("../../../domain/data-logger/models/log")

module.exports = {
    store: async (req, res) => {
        try {
            const data = {
                temperature: req.body.temperature,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                hash: req.body.hash,
                datalogger: req.body.datalogger,
            }
            await Log.create(data);
            res.status(201).json({ message: 'Log successfully registered.' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
    hash_logs: async (req, res) => {
        try {
            const logs = await Log.findAll({
                where: {
                    hash: req.params.hash
                }
            });
            res.status(200).json(logs);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Operation failed.' });
        }
     },
    datalogger_all: async (req, res) => { 
        try {
            const logs = await Log.findAll({
                where: {
                    datalogger: req.params.datalogger
                }
            });
            res.status(200).json(logs);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
}