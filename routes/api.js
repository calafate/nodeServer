const express = require("express")
const router = express.Router()
const {crearFarmacia, verFarmacias} = require("../controllers/apiController")


router.post('/crearFarmacia', crearFarmacia)
router.get('/verFarmacias', verFarmacias)

module.exports = router