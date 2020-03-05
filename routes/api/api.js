const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/UserController')
const postsController = require('../../controllers/PostsController');


router.route('/posts')
    .get(postsController.findAll)
    .post(postsController.create)
    .delete(postsController.delete);

router.route('/appUsers')
    .get(usersController.findAll)
    .post(usersController.create)
    .delete(usersController.delete)

router.route('/appUsers/:username')
    .get(usersController.findOne);



module.exports = router;