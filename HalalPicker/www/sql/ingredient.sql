-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : com-linweb487.srv.combell-ops.net:3306
-- Généré le : jeu. 09 déc. 2021 à 21:32
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
-- Structure de la table `ingredient`
--

CREATE TABLE `ingredient` (
  `ing_id` int(11) NOT NULL,
  `ing_name` varchar(50) NOT NULL,
  `ing_image_ingredient` varchar(200) NOT NULL,
  `product_prd_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`ing_id`, `ing_name`, `ing_image_ingredient`, `product_prd_id`) VALUES
(433, 'Beef', 'https://media-cdn.tripadvisor.com/media/photo-s/18/7b/03/e2/ribsteak.jpg', 33),
(434, 'Cheese', 'https://newsite.spinneyfields.com/wp-content/uploads/2020/02/Twice-graded-Cheese-Slices.jpg', 33),
(435, 'Salad', 'https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/05/r403-1-salade-verte-480x270.jpg', 33),
(436, 'Beef', 'https://media-cdn.tripadvisor.com/media/photo-s/18/7b/03/e2/ribsteak.jpg', 34),
(437, 'Large Portion Cheese', 'https://metro.co.uk/wp-content/uploads/2017/03/cheesebomb-burgers-at-maxwells-3.jpg?quality=90&strip=all&zoom=1&resize=480%2C318', 34),
(438, 'Salad', 'https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/05/r403-1-salade-verte-480x270.jpg', 34),
(439, 'Minced Meat', 'https://i.pinimg.com/736x/20/4a/d2/204ad2d2883a459b142555e8d5195f4d.jpg', 35),
(440, 'Fries', 'https://ychef.files.bbci.co.uk/976x549/p06g438l.jpg', 35),
(441, 'Salad', 'https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/05/r403-1-salade-verte-480x270.jpg', 35),
(442, 'Chicken', 'https://image.shutterstock.com/image-photo/delicious-grilled-chicken-kebab-wrap-260nw-1531183739.jpg', 36),
(443, 'Fries', 'https://ychef.files.bbci.co.uk/976x549/p06g438l.jpg', 36),
(444, 'Salad', 'https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/05/r403-1-salade-verte-480x270.jpg', 36),
(445, 'Tagliatelle', 'https://media.istockphoto.com/photos/pasta-tagiatelle-with-pesto-picture-id530998097', 37),
(446, 'Salmon', 'https://www.saltandlavender.com/wp-content/uploads/2016/06/salmon-pasta-creamy-garlic-sauce-2.jpg', 37),
(447, 'Spinach', 'https://www.saltandlavender.com/wp-content/uploads/2019/05/creamy-chicken-spinach-pasta-2.jpg', 37),
(448, 'Tagliatelle', 'https://media.istockphoto.com/photos/pasta-tagiatelle-with-pesto-picture-id530998097', 38),
(449, 'Mussels', 'https://static01.nyt.com/images/2015/03/25/dining/25MARTHA/25MARTHA-articleLarge.jpg', 38),
(450, 'Shrimp', 'https://natashaskitchen.com/wp-content/uploads/2017/05/Creamy-Shrimp-Alfredo-Pasta-500x500.jpg', 38),
(451, 'Tomato Sauce', 'https://www.cookingclassy.com/wp-content/uploads/2020/05/pizza-sauce-17-500x500.jpg', 39),
(452, 'Dough', 'https://i.pinimg.com/736x/e3/73/97/e37397791d0a69baeee8c2b7e46207d0.jpg', 39),
(453, 'Tuna', 'https://i.pinimg.com/736x/01/70/a5/0170a56f1cfb0c64c3bbf3fcfcbb0518.jpg', 39),
(454, 'Tomato Sauce', 'https://www.cookingclassy.com/wp-content/uploads/2020/05/pizza-sauce-17-500x500.jpg', 40),
(455, 'Dough', 'https://i.pinimg.com/736x/e3/73/97/e37397791d0a69baeee8c2b7e46207d0.jpg', 40),
(456, 'Chicken', 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2014_garlic-chicken-pizza_600x600.jpg?ext=.jpg', 40),
(457, 'Rice', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F88e9032c-45d5-4061-80f3-11a1728e12de.2Ejpeg/750x562/quality/80/crop-fro', 41),
(458, 'Avocat', 'https://img.cuisineaz.com/660x660/2016/01/16/i72930-maki.jpg', 41),
(459, 'Saumon', 'https://img.cuisineaz.com/660x660/2015/07/07/i8968-sushi-au-saumon.jpg', 41),
(460, 'Rice', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F88e9032c-45d5-4061-80f3-11a1728e12de.2Ejpeg/750x562/quality/80/crop-fro', 42),
(461, 'Tamago', 'https://uncutrecipes.com/Images-Recipes-Japanese/Tamago-Sushi.jpg', 42),
(462, 'Nori', 'https://image.made-in-china.com/2f0j10LNhapvDBOWuE/-Yaki-Sushi-Nori-Algue.jpg', 42),
(463, 'Fries', 'https://ychef.files.bbci.co.uk/976x549/p06g438l.jpg', 43),
(464, 'Guacamole', 'https://www.loleta.es/wp-content/uploads/2019/09/web-EL-PO%CC%80ZO-slide-9094-copia-1080x675.jpg', 43),
(465, 'Pico de gallo', 'https://mydominicankitchen.com/wp-content/uploads/2019/07/Pico-de-Gallo-Smart-Little-Cookie-5.jpg', 43),
(466, 'Avocado', 'https://omgchocolatedesserts.com/wp-content/uploads/2014/11/Chicken-Avocado-Buritos-3.jpg', 44),
(467, 'Fresh cilantro', 'https://www.thespruceeats.com/thmb/LSttCuRXbyjVkBkKlQtDvfGsn0k=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/478789639-56a30dfa5f9b58b7d0d03216.jpg', 44),
(468, 'Beans green pepper', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfjH0yqxpgkS9eIsciBcIm3zGte2XjtPDpS3ddCpmgTdlv60RLsf5z2nkAo2bBK2xqAU&usqp=CAU', 44),
(469, 'Chicken', 'https://www.recipetineats.com/wp-content/uploads/2020/02/Chicken-Burritos_2.jpg', 45),
(470, 'Cucumber', 'https://www.seriouseats.com/thmb/goXUB1XXDl1XZFvLb8XrX6sFsCY=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__2020102', 45),
(471, 'Avocados', 'https://omgchocolatedesserts.com/wp-content/uploads/2014/11/Chicken-Avocado-Buritos-3.jpg', 45),
(472, 'Roma Tomatoes', 'https://img.taste.com.au/IONJOqzB/w1200-h630-cfill/taste/2016/11/roma-tomato-and-basil-salad-82537-1.jpeg', 46),
(473, 'Kalamata', 'https://img-cdn.oliveoiltimes.com/VcLj4nE-GzoRp05u/w:364/h:242/q:75/dpr:2.6/https://www.oliveoiltimes.com/media/2020/06/22360262_s.jpg', 46),
(474, 'Feta Cheese', 'https://static01.nyt.com/images/2020/05/13/dining/lh-greek-salad/merlin_171784263_eafeb7f3-51a8-4931-af8a-bb8c386ded5f-articleLarge.jpg', 46),
(475, 'Chicken', 'https://img-global.cpcdn.com/recipes/100eb9862119c32b/1200x630cq70/photo.jpg', 47),
(476, 'Chutney de mangue', 'https://img.cuisineaz.com/660x660/2013/12/20/i34985-chutney-de-mangue-indien.jpeg', 47),
(477, 'Salad', 'https://www.lesfruitsetlegumesfrais.com/app/uploads/2013/05/r403-1-salade-verte-480x270.jpg', 47),
(478, 'Chicken', 'https://static.750g.com/images/600-600/632710c6f9992a9aba8592b9953f98ea/sandwich-au-poulet-grille.png', 48),
(479, 'Sucrine', 'https://www.willemsefrance.fr/Files/126284/Img/22/027422-Laitue-pommee-grasse-sucrine_1x500.jpg', 48),
(480, 'Aubergine', 'https://www.club-sandwich.net/images/photorecettes/bruschetta-aubergine.jpg', 48);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`ing_id`),
  ADD KEY `product_prd_id` (`product_prd_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `ing_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=481;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD CONSTRAINT `ingredient_ibfk_1` FOREIGN KEY (`product_prd_id`) REFERENCES `product` (`prd_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
