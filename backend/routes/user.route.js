const {  signup } = require('../controllers/user.controller')
const upload = require("../middleware/upload")

const router = require('express').Router()

router
.route('/')
.post(signup)


module.exports = router