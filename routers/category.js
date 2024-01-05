const express = require('express')
const router = express.Router()
const catcontroller = require('../controllers/category-controller')


router.get('/catlist', catcontroller.getcatdetails);

router.post('/addcat', catcontroller.addCategory);

router.put('/updatecat/:cid', catcontroller.updatecat);

router.delete('/deletecat/:cid', catcontroller.deletecat);


module.exports = router;