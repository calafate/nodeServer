const express = require("express")
const { farmaciaValidationRules, validarID, validate } = require("../middleware/validator")
const router = express.Router()
const {crearFarmacia, verFarmacias, verFarmaciaID, borrarFarmaciaID, modificarFarmaciaID} = require("../controllers/apiController")


router.post('/crearFarmacia', farmaciaValidationRules(), validate, crearFarmacia);
router.put('/modificarFarmacia/:id', validarID, farmaciaValidationRules(), validate,  modificarFarmaciaID);
router.get('/verFarmacias', verFarmacias);
router.get('/verFarmacia/:id', verFarmaciaID);
router.delete("/borrarFarmacia/:id", validarID, borrarFarmaciaID);


module.exports = router