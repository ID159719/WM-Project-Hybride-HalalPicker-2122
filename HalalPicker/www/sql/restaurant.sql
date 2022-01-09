-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : com-linweb487.srv.combell-ops.net:3306
-- Généré le : jeu. 09 déc. 2021 à 21:31
-- Version du serveur :  5.7.33-36-log
-- Version de PHP : 7.1.25-1+0~20181207224605.11+jessie~1.gbpf65b84

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ID338849_HamzaElIssati`
--

-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `rst_id` int(11) NOT NULL,
  `rst_name` varchar(50) NOT NULL,
  `rst_street` varchar(50) NOT NULL,
  `rst_number` varchar(50) NOT NULL,
  `rst_municipality` varchar(50) NOT NULL,
  `rst_postal_code` varchar(4) NOT NULL,
  `rst_image_restaurant` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `restaurant`
--

INSERT INTO `restaurant` (`rst_id`, `rst_name`, `rst_street`, `rst_number`, `rst_municipality`, `rst_postal_code`, `rst_image_restaurant`) VALUES
(1, 'Snack Tetiko', 'Bd Adolphe Max', '113', 'Bruxelles', '1000', 'https://img.restaurantguru.com/r83a-Snack-TETIKo-drink.jpg'),
(2, 'Royal Family Pizza', 'Chaussee de Gand', '395', 'Molenbeek-Saint-Jean', '1080', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4c/b7/8b/nous-somme-tres-heureux.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`rst_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `rst_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
