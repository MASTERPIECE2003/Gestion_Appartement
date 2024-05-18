-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 21 mars 2024 à 11:54
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestion_appartements`
--

-- --------------------------------------------------------

--
-- Structure de la table `appartement`
--

DROP TABLE IF EXISTS `appartement`;
CREATE TABLE IF NOT EXISTS `appartement` (
  `numApp` int(11) NOT NULL AUTO_INCREMENT,
  `design` varchar(255) NOT NULL,
  `loyer` decimal(10,2) NOT NULL,
  PRIMARY KEY (`numApp`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `appartement`
--

INSERT INTO `appartement` (`numApp`, `design`, `loyer`) VALUES
(52, 'Z-INDEX', '5020.00'),
(49, 'RIVAL', '150.00'),
(50, 'SPICE', '25000.00'),
(51, 'TOTALLYOWNER', '47000.00'),
(53, 'SALUT', '4120.00'),
(42, 'PARACETAMOLYY', '12000.00'),
(41, 'NATY', '1102.00'),
(43, 'TAMATAVEE', '2500.00'),
(44, 'IHO', '9400.00'),
(45, 'PAPIES', '5002.00'),
(46, 'ALLAN', '6000.00'),
(47, 'SULEMANSOURY', '49000.00'),
(48, 'SHOW', '100.00'),
(54, 'DEZOLE', '900.00'),
(55, 'JAMES', '2200.00'),
(56, 'ZELIO', '4900.00'),
(57, 'TYTY', '2600.00'),
(58, 'DESERT', '1500.00'),
(59, 'ZAZALAHY TAMATAVE', '15600.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
