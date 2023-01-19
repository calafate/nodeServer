const express = require("express")
const router = express.Router()
const user = require("../controllers/userController")


router.get('/', user.userHello)
router.get('/info', user.userInfo)


module.exports = router