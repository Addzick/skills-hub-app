// Ressources externes
const express = require('express');
const http = require('http');

// On crée une application Express
const app = express();

// On attribue le répertoire "dist" comme repertoire par défaut
app.use(express.static(__dirname + '/dist'));

// On crée un serveur HTTP sur la base de l'application
var server = http.createServer(app);

// Démarrage du serveur
server.listen( process.env.PORT || 4200, function() {
    console.info('Server is listening on port ' + server.address().port);
});