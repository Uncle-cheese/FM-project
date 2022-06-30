const userController = require('../Controllers/userController')
const {Router} = require('express')
const router = Router()

//user routes 
router.post('/',userController.createUsers)
router.get('/',userController.getAllUsers)

module.exports =router;

