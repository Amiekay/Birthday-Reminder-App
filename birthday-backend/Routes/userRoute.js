const express = require('express')
const router = express.Router()
const controller = require('../Controllers/userController')



// Create user
router.post('/signup', controller.createUser)



module.exports = router