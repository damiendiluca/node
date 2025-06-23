// Importer le module NATIF http pour créer un serveur web

const http = require('http')

// Importer le module FS (File system) pour nous permettre de lire ou créer des fichiers

const fs = require('fs')

// Importer le module path pour construire des chemins

const path = require ('path')

const server = http.createServer((req, res) => {
    // Initier le chemin du fichier à server selon la route demandée
    let filePath = './views' // Le dossier qui va contenir nos vues
    let status = 200 // On suppose que tout est ok
    let contentType = 'text/html' // On sert uniquement de l'HTML
    

    // On va regarder quelle URL est demandée
    switch (req.url) {
        case './':
            filePath += '/index.html' // Si je demande '/', je reçois index.html (Page d'accueil)
            break;
            case './':
            filePath += '/about.html' // Si je demande '/', je reçois index.html (Page d'accueil)
            break;
            case './':
            filePath += '/contact.html' // Si je demande '/', je reçois index.html (Page d'accueil)
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