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
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `prd_id` int(11) NOT NULL,
  `prd_name` varchar(50) NOT NULL,
  `prd_price` double NOT NULL,
  `prd_favourite` tinyint(1) NOT NULL DEFAULT '0',
  `prd_image__product` varchar(200) NOT NULL,
  `category_cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`prd_id`, `prd_name`, `prd_price`, `prd_favourite`, `prd_image__product`, `category_cat_id`) VALUES
(33, 'West Coast', 8.5, 0, 'https://lh3.googleusercontent.com/g12Fe-W1VjudsJGsmH4jMUAvLZW0kQGAtMd3zriIR4aC3vLJISnR0Ahxt6A7kZAs-Qz11mo=s128', 33),
(34, 'Cheeseburger', 9.5, 0, 'https://lh3.googleusercontent.com/mpWXpdPsWc1fQ-D_LazOpoKWjdwAk6dvATXoJ6hkHBWNGrPmvCPTfpIm9DIUwhVjgMd9jw=s113', 33),
(35, 'Köfte dürüm', 7.5, 0, 'https://lh3.googleusercontent.com/gPqZZ2DT2vS74k4tUQwBVmJOzxbPehnzhxfzy2C9YxNS1_dttIBROOLepzN65nfekFNj=s85', 34),
(36, 'Chicken dürüm', 8, 0, 'https://lh3.googleusercontent.com/v7EdTlXqznDFliHc0dNsUNu0MeVhuXVuRMYQvyJlqsQuQPW5w8sYH1CvjsBktBD7N0QF_w=s126', 34),
(37, 'Salmon & Spinach pasta', 10.5, 0, 'https://lh3.googleusercontent.com/eLcz9uEHzeuZ4NWcMw7wJgjLLf5tZ4UDRWHvCmSu0lftroPPJz_I_WYVJlUMNYoHoQw0Vw=s128', 35),
(38, 'Frutti di mare pasta', 11.5, 0, 'https://lh3.googleusercontent.com/yCK-7l4ZEKXH99x7jckbd2Qnx0MM5lOzf1qGrNI_1AutMffKdk1vowKU7hUIeAssQ1GUVg=s113', 35),
(39, 'Thuna pizza', 8.5, 0, 'https://lh3.googleusercontent.com/AYWoeKbMc3r6PWzM_a9NO8YkSHEWFsHf5uX12Ir8JG5TyNCqVCZeCmI43d2TF5qvGl_t=s142', 36),
(40, 'Chicken pizza', 9.5, 0, 'https://lh3.googleusercontent.com/LeelhbPtBbc8UmlkJtN5-HqkkLoJtPy_PzBshCPkawEwvr8Tp_dqmA9IZRiOR7ckw8BiwA=s134', 36),
(41, 'Temaki Sushi', 8.5, 0, 'https://www.sushiprod.com/wp-content/uploads/2013/08/temaki-300x157.jpg', 37),
(42, 'Nigiri Sushi', 9.5, 0, 'https://www.sushiprod.com/wp-content/uploads/2013/08/nigiri-sushi-300x127.jpg', 37),
(43, 'California Burrito', 7.5, 0, 'https://www.tasteofhome.com/wp-content/uploads/2021/05/california-burrito-GettyImages-685254771.jpg?resize=768,768', 38),
(44, 'Veggie Burrito', 8, 0, 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Burritos_EXPS_SDJJ18_11231_B02_08_2b-2.jpg?resize=768,768', 38),
(45, 'Grilled Lemon Herb Mediterranean Chicken Salad', 10.5, 0, 'https://cafedelites.com/wp-content/uploads/2016/07/Lemon-Herb-Mediterranean-Chicken-Salad-208.jpg', 39),
(46, 'Greek Salad', 11.5, 0, 'https://www.cookingclassy.com/wp-content/uploads/2014/03/greek-salad-6-768x1221.jpg', 39),
(47, 'L’exotique', 8.5, 0, 'https://larecette.net/wp-content/uploads/2020/02/iStock-535466213.jpg', 40),
(48, 'Sandwich poulet-aubergine', 9.5, 0, 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F06.2F19.2F7410c840-32c1-4fba-afc4-d8a3daccb840.2Ejpeg/850x478/quality/90/crop-fro', 40);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prd_id`),
  ADD KEY `category_cat_id` (`category_cat_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `prd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_cat_id`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
