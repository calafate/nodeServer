const { check, validationResult } = require('express-validator')
const { Farmacia } = require('../models/farmacia')

const farmaciaValidationRules = () => {
  return [
    check("razonSocial").not().isEmpty().withMessage("Ingrese Razon Social"),
    check("nombreFantasia").not().isEmpty().withMessage("Ingrese Nombre de Fantasia"),
    check("cuit").not().isEmpty().isNumeric().isLength({ min: 11 }).withMessage("Ingrese CUIT (11 numeros)"),
    check("direccion").not().isEmpty().withMessage("Ingrese Dirección"),
    check("telefono").not().isEmpty().withMessage("Ingrese nro. de Telefono"),
    check("mail").not().isEmpty().isEmail().withMessage("Ingrese Email con formato valido"),
    check("codigoPagoElectronico").not().isEmpty().isNumeric().withMessage("Ingrese Codigo de Pago Electrónico numerico"),
    check("farmaciaActiva").not().isEmpty().isBoolean().withMessage("Ingrese true or false")
  ]
}

const validarID = async (req, res, next) => {
  const ID = req.params.id
  if (ID.length === 24) {
    console.log("Formato de ID correcto");
    next();
  } else {
    res.status(500).json({msg:"ID invalido debe poseer 24 caracteres alfanumericos"});
  }
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  res.status(400).json({errors: errors.array()});
}

module.exports = {
  farmaciaValidationRules,
  validarID,
  validate,
}