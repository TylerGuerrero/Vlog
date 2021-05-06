const express = require('express');

// init server
const app = express();

app.get('/', (req, res) => {
    // res.send('<p>Hello<p/>');
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
// goes all the way to the bottum so 
// everything can else can run first
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root : __dirname})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})