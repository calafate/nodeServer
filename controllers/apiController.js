const {Farmacia} = require("../models/farmacia")

    const crearFarmacia = async (req, res) => {
        try {
            const farmacia = new Farmacia(req.body)
            await farmacia.save()
            res.status(201).json(farmacia)
        } catch (error) {
            res.status(501).json(error)
        }
    }

    const verFarmacias = async (requ, res) => {
            const farmacias = await Farmacia.find()
            res.status(200).json({farmacias})
    }

    
module.exports = {crearFarmacia, verFarmacias}
