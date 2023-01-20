const {Duxpet} = require("../models/duxpet")

    const guardarMascota = async (req, res) => {
        try {
            const mascota = new Duxpet(req.body)
            await mascota.save()
            res.status(201).json(mascota)
        } catch (error) {
            res.status(501).json(error)
        }
    }

    const vistaDeTodasLasMascotas = async (requ, res) => {
            const mascotas = await Duxpet.find()
            res.status(200).json({mascotas})
    }

module.exports = {guardarMascota, vistaDeTodasLasMascotas}