const http = require('http')
const fs = require('fs')
const path = require ('path')

const server = http.createServer((req, res) => {
    let filePath = './public'
    let status = 200
    let contentType = 'text/html'
    
    switch (req.url) {
        case '/':
            filePath += '/index.html'
            break;

            case '/about.html':
            filePath += '/about.html'
            break;

            case '/contact.html':
            filePath += '/contact.html'
            break;

            default:
            filePath += '/404.html'
            break;
    }

    fs.readFile(path.resolve(__dirname, filePath), (err, content) => {
        if (err) {
            res.writeHead(500, {'content-type' : 'text/plain'})
        } else {
res.writeHead(status, {
    'ContentType': contentType,
})
        }
        res.end(content)
    })
    
})

server.listen(3000, () => {
    console.log("Le serveur tourne sur l'adresse locale http://localhost:3000");

})