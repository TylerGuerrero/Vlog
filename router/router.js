const router = require('express').Router();
const Blog = require('../models/Blog');

// have to put this get request first because
// the file runs from top to down
// if not the id below will read create as id and
// cause an error

// get create blog page
router.get('/create', (req, res) => {
    res.render('create', {title: 'New Blog'});
})

// delete blog
router.delete('/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, blog) => {
        if (err) throw err;
        res.json({redirect: '/blogs'});
    })
})

// get all the blogs in sorted order
router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) throw err
        res.render('index', {title: 'All Blogs', blogs: blogs})
    }).sort({createdAt: -1})
})

// get single blog
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) throw err;
        res.render('details', {title: 'Blog Details', blog: blog})
    })
})

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    })

    await blog.save().then((newBlog) => {
        res.redirect('/blogs');
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;