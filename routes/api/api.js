const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/UserController')
const postsController = require('../../controllers/PostsController');
const barsController = require('../../controllers/BarController');


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

    router.route('/bars')
    .get(barsController.findAll)
    .post(barsController.create)
    .delete(barsController.delete)

router.route('/bars/:barname')
    .get(barsController.findOne);

router.route(`/bars/:barname`)
    .put(barsController.update);



module.exports = router;
