const express = require("express")
const app = express()
const port = 3000

/*
NOTA IMPORTANTE: no enviar el paquete de node_modules en la tarea. Comprimir la carpeta en un archivo zip o rar antes de subirla
*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`)
})

// Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
// Ejemplo: http://localhost:3000/saludo/Sol/Luna
app.get('/saludo/:nombre/:apellido', (req, res) => {
  (res.send(`Hola ${req.params.nombre} ${req.params.apellido}`))
})

// Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).
// Ejemplo: http://localhost:3000/dividir/10/0 o http://localhost:3000/dividir/10/2
app.get('/dividir/:dividendo/:divisor', (req, res) => {
  if (Number(req.params.divisor) === 0) {
    res.json({error: "no se puede dividir por cero"})
  } else {
    res.json({resultado : Number(req.params.dividendo) / Number(req.params.divisor)})
  }
})

// Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
// Ejemplo: http://localhost:3000/sumar/5/-8 o http://localhost:3000/sumar/5/7
app.get('/sumar/:valor1/:valor2', (req, res) => {
  if (Number(req.params.valor1) < 0 || Number(req.params.valor2) < 0) {
    res.json({error: "no se puedan enviar números menores que cero"})
  } else {
    res.json({resultado : Number(req.params.valor1) + Number(req.params.valor2)})
  }
})

// Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
// Ejemplo: http://localhost:3000/autorizar?numero=3 or http://localhost:3000/autorizar?numero=2
app.get('/autorizar', (req, res) => {
  if (Number(req.query.numero) % 2 == 0) {
    res.send("autorizado")
  } else {
    res.send("no autorizado")
  }
})

// Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}). 
// Ejemplo: http://localhost:3000/lista-de-compras?p1=fideos&p2=papas&p3=mayonesa&p4=queso&p5=jamon
app.get('/lista-de-compras', (req, res) => {
  res.json({
    p1: req.query.p1,
    p2: req.query.p2,
    p3: req.query.p3,
    p4: req.query.p4,
    p5: req.query.p5,
  })
})