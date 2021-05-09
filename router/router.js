const router = require('express').Router();
const blogController = require('../controllers/blogController');

// have to put this get request first because
// the file runs from top to down
// if not the id below will read create as id and
// cause an error

// get create blog page
router.get('/create', blogController.blog_create_get)

// delete blog
router.delete('/:id', blogController.blog_delete)

// get all the blogs in sorted order
router.get('/', blogController.blog_index);

// get single blog
router.get('/:id', blogController.blog_details)

// creates a post
router.post('/', blogController.blog_create_post);

module.exports = router;