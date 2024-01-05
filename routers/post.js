const express = require('express')
const router = express.Router()
const postController  = require("../controllers/post-controller");


router.get('/getpost', postController.getpostsdetails);
router.post('/addpost', postController.addPostDetails);
router.put('/updatepost/:cid', postController.updatePosts);
router.delete('/deletepost/:cid', postController.deletePosts);

// CRUD
// C - create
// R - Read
// U - Update
// D - delete


module.exports = router;