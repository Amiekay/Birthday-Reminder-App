const express = require('express')
const router = express.Router()
const controller = require('../Controllers/userController')



// Create user
router.post('/signup', controller.createUser)
router.get('/users', controller.getAllUsers)



module.exports = router