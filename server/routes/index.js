const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.readAll)


module.exports = router