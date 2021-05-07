const express = require('express');
const path = require('path')
const morgan = require('morgan')

// init server
const app = express();

// server settings for view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// when using middleware express doesnt know how to move on
// to the next request
// so you need to invoke next() when done
app.use(morgan('dev'));

// middleware to allow access to static files
// browser by default doesnt let uses access files you link
// like css and things like that
// so you set which folder you want to be public to the browser
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    
    res.render('index', {title: 'Home', blogs: blogs});
})

// the request will never run becasue
// of the route and res.render above.. it wont reach it
// **always put your middle ware at the top
app.use((req, res, next) => {
    console.log('In the next middleware')
    next();
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

// app.get('/about', (req, res) => {
     // needs absolute file path
     // from your C drive
//     res.sendFile('./views/about.ejs', {root: __dirname});
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
})

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
// goes all the way to the bottum so 
// everything can else can run first
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})}
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})