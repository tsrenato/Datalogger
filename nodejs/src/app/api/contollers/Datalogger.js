const DataLogger = require("../../../domain/data-logger/models/datalogger");
const Log = require("../../../domain/data-logger/models/log");

module.exports = {
    /**
     * Displays all datalogger register in database.
     * @param {*} req 
     * @param {*} res 
     */
    index: async (req, res) => {
        try {
            const dataloggers = await DataLogger.findAll();
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
            const datalogger = await DataLogger.findByPk(req.params.id);
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
            const datalogger = await DataLogger.create(data);
            res.status(201).json(datalogger);
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
            await DataLogger.update(data, {
                where: {
                    id: req.params.id,
                }
            });
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
            await DataLogger.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({ message: 'Datalogger successfully deleted.' });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            })
        }
    },
    /**
     * Records a temperature log.
     * @param {*} req 
     * @param {*} res 
     */
    log: async (req, res) => {
        try {
            const data = {
                temperature: req.body.temperature,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }
            await Log.create(data);
            res.status(201).json({ message: 'Log successfully registered.' })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Operation failed.' })
        }
    }
}