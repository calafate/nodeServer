const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const app = express()

const indexRouter = require ("./routes/index")
const userRouter = require ("./routes/user")
const apiRouter = require ("./routes/api")


const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use("/", indexRouter)
app.use("/user", userRouter)
app.use("/api", apiRouter)

connect();

module.exports = app