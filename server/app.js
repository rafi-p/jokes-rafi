
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/index.js')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))