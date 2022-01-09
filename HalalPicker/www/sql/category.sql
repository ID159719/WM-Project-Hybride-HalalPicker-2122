-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : com-linweb487.srv.combell-ops.net:3306
-- Généré le : jeu. 09 déc. 2021 à 21:30
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
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(50) NOT NULL,
  `cat_image_category` varchar(200) NOT NULL,
  `restaurant_rst_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_image_category`, `restaurant_rst_id`) VALUES
(33, 'burger', 'https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2017/06/burger-de-gambas.jpg', 1),
(34, 'dürüm', 'https://www.restalamaison.ch/images/thumbnails/2785/1989/detailed/11/durum_istanbul.jpg', 1),
(35, 'pasta', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg', 1),
(36, 'pizza', 'https://www.galbani.fr/wp-content/uploads/2017/07/pizza_filant_montage_2_3.jpg', 1),
(37, 'sushi', 'https://media.istockphoto.com/photos/all-you-can-eat-sushi-picture-id1053854126?k=20&m=1053854126&s=170667a&w=0&h=JgsHexR1jxr2BlRaQlZQS316vsuQF75p6Wp10497XRA=', 2),
(38, 'burritos', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F53c015db-6bd2-43cd-ae9f-ca9c68a12238.2Ejpeg/750x562/quality/80/crop-fro', 2),
(39, 'salad', 'https://img.cuisineaz.com/680x357/2021/03/18/i165907-salade-cesar-min.jpeg', 2),
(40, 'sandwich', 'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/club-sandwich-poulet_istock.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`),
  ADD KEY `restaurant_rst_id` (`restaurant_rst_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`restaurant_rst_id`) REFERENCES `restaurant` (`rst_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
