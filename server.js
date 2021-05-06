const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made')
})

const PORT = process.env.PORT || 3000
server.listen(PORT, 'localhost', () => {
    console.log(`Server running on port: ${PORT}`);
})