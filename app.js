const express = require('express')
const router = express.Router()
const rutasInicio = require('./routes/home')
const app = express()

app.listen(3000, () => console.log('corriendo'))

app.get("/", function (req, res) {
    res.send("Nazi")
})

app.use('/home', rutasInicio)