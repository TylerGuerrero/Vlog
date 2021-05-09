const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

// init server
const app = express();

// check for errors during the initial connection
// and connect to the database        
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true})
        .catch((err) => {if (err) throw err});

// check for errors after initial connection        
mongoose.connection.on('error', () => {
    console.log('MongoDB has a error')
});

// check for connection to make sure its working
mongoose.connection.once('open', () => {
    console.log('MongoDB is Connected');
})

// server settings for view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// If the current middleware function does not end the 
// request-response cycle, it must call next() to 
// pass control to the next middleware function. 
// Otherwise, the request will be left hanging.

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// middleware to allow access to static files
// browser by default doesnt let uses access files you link
// like css and things like that
// so you set which folder you want to be public to the browser
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
})

// the request will never run becasue
// of the route and res.render above.. it wont reach it
// **always put your middle ware at the top
// app.use((req, res, next) => {
//     console.log('In the next middleware')
//     next();
// })

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.use('/blogs', require('./router/router'));

// app.get('/about', (req, res) => {
     // needs absolute file path
     // from your C drive
//     res.sendFile('./views/about.ejs', {root: __dirname});
// })

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