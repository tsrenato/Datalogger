const DataLogger = require("../../../domain/data-logger/models/datalogger");
const Log = require("../../../domain/data-logger/models/log");
const DataLoggerRepo = require("../../../domain/data-logger/repositories/dataloggerRepo");

module.exports = {
    /**
     * Displays all datalogger register in database.
     * @param {*} req 
     * @param {*} res 
     */
    index: async (req, res) => {
        try {
            const dataloggers = await DataLoggerRepo.list();
            res.status(200).json(dataloggers);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            })
        }
    },
    /**
     * Displays a datalogger register by id.
     * @param {*} req 
     * @param {*} res 
     */
    show: async (req, res) => {
        try {
            const datalogger = await DataLoggerRepo.show(req.params.id);
            if (!datalogger) throw 404;
            res.status(200).json(datalogger);
        } catch (err) {
            console.log(err);

            switch (err) {
                case 404:
                    res.status(404).json({
                        message: 'Datalogger not found.'
                    });
                    break;
                default:
                    res.status(500).json({
                        message: 'Operation failed.'
                    });
                    break;
            }
        }
    },
    /**
     * Inserts a new datalogger register.
     * @param {*} req 
     * @param {*} res 
     */
    store: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                log_interval: req.body.interval,
            }
            const datalogger = await DataLoggerRepo.create(data);
            res.status(201).json({message: "Datalogger successfully created."});
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            })
        }
    },
    /**
     * Updates a new datalogger register.
     * @param {*} req 
     * @param {*} res 
     */
    update: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                log_interval: req.body.interval,
            }
            await DataLoggerRepo.update(req.params.id, data);
            res.status(200).json({ message: 'Datalogger successfully updated.' });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            })
        }
    },
    /**
     * Deletes a datalogger register by id.
     * @param {*} req 
     * @param {*} res 
     */
    destroy: async (req, res) => {
        try {
            await DataLoggerRepo.delete(req.params.id);
            res.status(200).json({ message: 'Datalogger successfully deleted.' });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            })
        }
    },
}