const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/Users-controller')
//const validation = require('../helper/validation')

router.get('/userlist', usercontroller.userlist)

 router.post('/adduser', usercontroller.adduser)

router.put('/updateuser/:uid',usercontroller.updateuser)

router.delete('/deleteuser/:uid',usercontroller.deleteuser)

//router.post('/Registration',validation.createUserSchema , usercontroller.userRegistration);

router.post('/login',usercontroller.login)

module.exports = router;