const router = require('express').Router();
const postsController = require('./../../controllers/PostsController');


//match with api/movies
router.route('/posts')
    .get(postsController.findAll)
    .post(postsController.create);

// should match number of controllers 
router.route('/:id')
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.delete);


module.exports = router;