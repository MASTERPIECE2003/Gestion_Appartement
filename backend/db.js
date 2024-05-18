const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'gestion_appartements'
});

// Connexion à la base de données
connection.connect(error => {
  if (error) {
    console.error('Erreur lors de la connexion à la base de données :', error.stack);
    return;
  }
  console.log('Connexion reussi à la base de données MySQL avec l\'ID de connexion :', connection.threadId);
});

module.exports = connection;
