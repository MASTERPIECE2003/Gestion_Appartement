const Appartement = require('../models/appartementModel');

//Récupération de tous les appartements
exports.getAllAppartements = (req, res) => {
  Appartement.getAllAppartements((err, data) => {
      if (err) {
          res.status(500).send({
              message: err.message || "Une erreur s'est produite lors de la récupération des appartements."
          });
      } else {
          res.send(data);
      }
  });
};

// Ajout d'un appartement
exports.addAppartement = (req, res) => {
  if (!req.body.design || !req.body.loyer) {
      res.status(400).send({ message: "Les champs design et loyer ne peuvent pas être vides !" });
      return;
  }

  const appartement = {
      design: req.body.design,
      loyer: req.body.loyer
  };

  Appartement.addAppartement(appartement, (err, data) => {
      if (err) {
          res.status(500).send({
              message: err.message || "Une erreur s'est produite lors de l'ajout de l'appartement."
          });
      } else {
          res.send(data);
      }
  });
};

// Mise à jour d'un appartement
exports.updateAppartement = (req, res) => {
  const numApp = req.params.numApp;
  const appartement = req.body;

  Appartement.updateAppartement(numApp, appartement, (err, data) => {
      if (err) {
          res.status(500).send({
              message: err.message || 
              "Une erreur s'est produite lorsde la mise à jour de l'appartement."
          });
      } else {
          res.send(data);
      }
  });
};

// Suppression d'un appartement
exports.deleteAppartement = (req, res) => {
  const numApp = req.params.numApp;

  Appartement.deleteAppartement(numApp, (err, data) => {
      if (err) {
          res.status(500).send({
              message: err.message || "Une erreur s'est produite lors de la suppression de l'appartement."
          });
      } else {
          res.send({ message: "L'appartement a été supprimé avec succès." });
      }
  });
};