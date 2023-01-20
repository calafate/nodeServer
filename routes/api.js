const express = require("express")
const router = express.Router()
const {guardarMascota, vistaDeTodasLasMascotas} = require("../controllers/apiController")


router.post('/crear', guardarMascota)
router.get('/vertodo', vistaDeTodasLasMascotas)

module.exports = router