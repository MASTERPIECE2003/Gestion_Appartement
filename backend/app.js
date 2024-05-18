const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

app.use(cors());

// Importer le modèle et les fonctions de gestion des appartements
const appartementModel = require('./models/appartementModel');

// Création du serveur HTTP
const server = http.createServer(app);
const io = socketIo(server);

// Route récupérer tous les appartements
app.get('/appartements', (req, res) => {
  appartementModel.getAllAppartements((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des appartements."
      });
    } else {
      res.send(data);
    }
  });
});

// Route  ajout un nouvel appartement
app.post('/appartements', (req, res) => {
  const { design, loyer } = req.body;
  const nouvelAppartement = {
    design: design,
    loyer: loyer
  };

  appartementModel.addAppartement(nouvelAppartement, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de l'ajout de l'appartement."
      });
    } else {
      res.send(data);
    }
  });
});

// Route pour mettre à jour un appartement existant
app.put('/appartements/:numApp', (req, res) => {
  const numApp = req.params.numApp;
  const { design, loyer } = req.body;
  const appartement = {
    design: design,
    loyer: loyer
  };

  appartementModel.updateAppartement(numApp, appartement, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la modification de l'appartement."
      });
    } else {
      res.send(data);
    }
  });
});

// Route pour supprimer un appartement
app.delete('/appartements/:numApp', (req, res) => {
  const numApp = req.params.numApp;

  appartementModel.deleteAppartement(numApp, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la suppression de l'appartement."
      });
    } else {
      res.send({ message: "L'appartement a été supprimé avec succès." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});