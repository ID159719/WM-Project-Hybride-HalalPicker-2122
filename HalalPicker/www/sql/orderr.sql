-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : com-linweb487.srv.combell-ops.net:3306
-- Généré le : dim. 19 déc. 2021 à 23:24
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
-- Structure de la table `orderr`
--

CREATE TABLE `orderr` (
  `ord_id` int(11) NOT NULL,
  `ord_total_price` double NOT NULL DEFAULT '0',
  `restaurant_rst_id` int(11) NOT NULL,
  `customer_cstm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `orderr`
--

INSERT INTO `orderr` (`ord_id`, `ord_total_price`, `restaurant_rst_id`, `customer_cstm_id`) VALUES
(1, 18, 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `orderr`
--
ALTER TABLE `orderr`
  ADD PRIMARY KEY (`ord_id`),
  ADD KEY `restaurant_rst_id` (`restaurant_rst_id`),
  ADD KEY `customer_cstm_id` (`customer_cstm_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `orderr`
--
ALTER TABLE `orderr`
  MODIFY `ord_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `orderr`
--
ALTER TABLE `orderr`
  ADD CONSTRAINT `orderr_ibfk_1` FOREIGN KEY (`restaurant_rst_id`) REFERENCES `restaurant` (`rst_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderr_ibfk_2` FOREIGN KEY (`customer_cstm_id`) REFERENCES `customer` (`cstm_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
