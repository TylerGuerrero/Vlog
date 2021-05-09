const Blog = require('../models/Blog')

const blog_index = (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) throw err
        res.render('blogs/index', {title: 'All Blogs', blogs: blogs})
    }).sort({createdAt: -1})
} 

const blog_details = (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            res.status(404).render('404', {title: '404'})
        }
        
        res.render('blogs/details', {title: 'Blog Details', blog: blog})
    })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'New Blog'});
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, blog) => {
        if (err) throw err;
        res.json({redirect: '/blogs'});
    })
}

const blog_create_post = async (req, res) => {
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
}

module.exports = {
    blog_index,
    blog_details,
    blog_delete,
    blog_create_get,
    blog_create_post
}