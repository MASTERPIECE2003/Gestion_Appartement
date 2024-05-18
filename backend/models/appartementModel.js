const db = require('../db');

exports.getAllAppartements = result => {
  db.query("SELECT *, CASE \
    WHEN loyer < 1000 THEN 'bas' \
    WHEN loyer BETWEEN 1000 AND 5000 THEN 'moyen' \
    ELSE 'élevé' \
    END AS obs FROM Appartement", (err, res) => {
    if (err) {
      console.error("Erreur lors de la récupération des appartements :", err);
      result(err, null);
      return;
    }
    console.log("Appartements récupérés :", res);
    result(null, res);
  });
};

// Ajout d'un appartement
exports.addAppartement = (appartement, result) => {
  db.query("INSERT INTO Appartement SET ?", appartement, (err, res) => {
    if (err) {
      console.error("Erreur lors de l'ajout de l'appartement :", err);
      result(err, null);
      return;
    }
    console.log("Appartement ajouté :", { numApp: res.insertId, ...appartement });
    result(null, { numApp: res.insertId, ...appartement });
  });
};

// Modification d'un appartement
exports.updateAppartement = (numApp, appartement, result) => {
  db.query("UPDATE Appartement SET ? WHERE numApp = ?", [appartement, numApp], (err, res) => {
    if (err) {
      console.error("Erreur lors de la modification de l'appartement :", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      // Aucun enregistrement trouvé avec l'ID spécifié
      result({ message: "L'appartement n'a pas été trouvé." }, null);
      return;
    }
    console.log("Appartement mis à jour :", { numApp: numApp, ...appartement });
    result(null, { numApp: numApp, ...appartement });
  });
};

// Suppression d'un appartement 
exports.deleteAppartement = (numApp, result) => {
  db.query("DELETE FROM Appartement WHERE numApp = ?", numApp, (err, res) => {
    if (err) {
      console.error("Erreur lors de la suppression de l'appartement :", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      // Aucun enregistrement trouvé avec l'ID spécifié
      result({ message: "L'appartement n'a pas été trouvé." }, null);
      return;
    }
    console.log("Appartement supprimé avec succès.");
    result(null, res);
  });
};
