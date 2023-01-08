const express = require('express')
const router = express.Router()


router.use('/rides', require('./rides.js'))
router.use('/chat', require('./chat.js'))


module.exports = router