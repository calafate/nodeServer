const { Farmacia } = require("../models/farmacia");

const crearFarmacia = async (req, res) => {
    try {
        const farmacia = new Farmacia(req.body);
        await farmacia.save();
        res.status(201).json(farmacia);
    } catch (error) {
        res.status(501).json(error);
    }
};

const modificarFarmaciaID = async (req, res) => {
    try {
        const farmacia = await Farmacia.findByIdAndUpdate(req.params.id, req.body);
        if (farmacia === null) {
            res.json({ data: farmacia, status: "ID inexistente" });
        }
        else {
            res.json({ data: farmacia, status: "success" });
        }
    } catch (error) {
        res.status(501).json(error);
    }
};

const verFarmacias = async (req, res) => {
    try {
        const farmacias = await Farmacia.find();
        res.status(200).json({ farmacias });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

const verFarmaciaID = async (req, res) => {
    try {
        const farmacias = await Farmacia.findById(req.params.id);
        res.status(200).json({ farmacias });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const borrarFarmaciaID = async (req, res) => {
    try {
        const farmacia = await Farmacia.findByIdAndDelete(req.params.id);
        if (farmacia === null) {
            res.json({ data: farmacia, status: "ID inexistente" });
        }
        else {
            res.json({ data: farmacia, status: "success" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearFarmacia,
    verFarmacias,
    verFarmaciaID,
    borrarFarmaciaID,
    modificarFarmaciaID,
};
