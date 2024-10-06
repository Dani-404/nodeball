-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 06 oct. 2024 à 10:30
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nodeball_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `chatlogs`
--

CREATE TABLE `chatlogs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pm_user_id` int(11) DEFAULT NULL,
  `message` varchar(150) NOT NULL,
  `server_region` varchar(50) NOT NULL,
  `room` varchar(25) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `chatlogs`
--

INSERT INTO `chatlogs` (`id`, `user_id`, `pm_user_id`, `message`, `server_region`, `room`, `date`) VALUES
(1, 1, 2, 'test', 'EU', NULL, '2024-10-06 10:23:39'),
(2, 1, 2, 'testt', 'EU', NULL, '2024-10-06 10:23:43'),
(3, 2, 1, 'whisper', 'EU', NULL, '2024-10-06 10:26:29');

-- --------------------------------------------------------

--
-- Structure de la table `sanctions`
--

CREATE TABLE `sanctions` (
  `id` int(11) NOT NULL,
  `type` enum('ban','mute') NOT NULL,
  `user_id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `ip` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `by_player` varchar(15) NOT NULL,
  `unban_by` varchar(15) DEFAULT NULL,
  `reason` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `shop_category`
--

CREATE TABLE `shop_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `shop_category`
--

INSERT INTO `shop_category` (`id`, `name`) VALUES
(1, 'SHOP_CATEGORY_FLAGS');

-- --------------------------------------------------------

--
-- Structure de la table `shop_items`
--

CREATE TABLE `shop_items` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `type` enum('avatar') NOT NULL DEFAULT 'avatar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `shop_items`
--

INSERT INTO `shop_items` (`id`, `category_id`, `price`, `type`) VALUES
(1, 1, 50, 'avatar'),
(2, 1, 50, 'avatar'),
(3, 1, 50, 'avatar'),
(4, 1, 50, 'avatar'),
(5, 1, 50, 'avatar'),
(6, 1, 50, 'avatar'),
(7, 1, 50, 'avatar'),
(8, 1, 50, 'avatar'),
(9, 1, 50, 'avatar'),
(10, 1, 50, 'avatar'),
(11, 1, 50, 'avatar'),
(12, 1, 50, 'avatar'),
(13, 1, 50, 'avatar'),
(14, 1, 50, 'avatar'),
(15, 1, 50, 'avatar'),
(16, 1, 50, 'avatar'),
(17, 1, 50, 'avatar'),
(18, 1, 50, 'avatar'),
(19, 1, 50, 'avatar'),
(20, 1, 50, 'avatar'),
(21, 1, 50, 'avatar'),
(22, 1, 50, 'avatar'),
(23, 1, 50, 'avatar'),
(24, 1, 50, 'avatar'),
(25, 1, 50, 'avatar'),
(26, 1, 50, 'avatar'),
(27, 1, 50, 'avatar'),
(28, 1, 50, 'avatar'),
(29, 1, 50, 'avatar'),
(30, 1, 50, 'avatar'),
(31, 1, 50, 'avatar'),
(32, 1, 50, 'avatar'),
(33, 1, 50, 'avatar'),
(34, 1, 50, 'avatar'),
(35, 1, 50, 'avatar'),
(36, 1, 50, 'avatar'),
(37, 1, 50, 'avatar'),
(38, 1, 50, 'avatar'),
(39, 1, 50, 'avatar'),
(40, 1, 50, 'avatar'),
(41, 1, 50, 'avatar'),
(42, 1, 50, 'avatar'),
(43, 1, 50, 'avatar'),
(44, 1, 50, 'avatar'),
(45, 1, 50, 'avatar'),
(46, 1, 50, 'avatar'),
(47, 1, 50, 'avatar'),
(48, 1, 50, 'avatar'),
(49, 1, 50, 'avatar'),
(50, 1, 50, 'avatar'),
(51, 1, 50, 'avatar'),
(52, 1, 50, 'avatar'),
(53, 1, 50, 'avatar'),
(54, 1, 50, 'avatar'),
(55, 1, 50, 'avatar'),
(56, 1, 50, 'avatar'),
(57, 1, 50, 'avatar'),
(58, 1, 50, 'avatar'),
(59, 1, 50, 'avatar'),
(60, 1, 50, 'avatar'),
(61, 1, 50, 'avatar'),
(62, 1, 50, 'avatar'),
(63, 1, 50, 'avatar'),
(64, 1, 50, 'avatar'),
(65, 1, 50, 'avatar'),
(66, 1, 50, 'avatar'),
(67, 1, 50, 'avatar'),
(68, 1, 50, 'avatar'),
(69, 1, 50, 'avatar'),
(70, 1, 50, 'avatar'),
(71, 1, 50, 'avatar'),
(72, 1, 50, 'avatar'),
(73, 1, 50, 'avatar'),
(74, 1, 50, 'avatar'),
(75, 1, 50, 'avatar'),
(76, 1, 50, 'avatar'),
(77, 1, 50, 'avatar'),
(78, 1, 50, 'avatar'),
(79, 1, 50, 'avatar'),
(80, 1, 50, 'avatar'),
(81, 1, 50, 'avatar'),
(82, 1, 50, 'avatar'),
(83, 1, 50, 'avatar'),
(84, 1, 50, 'avatar'),
(85, 1, 50, 'avatar'),
(86, 1, 50, 'avatar'),
(87, 1, 50, 'avatar'),
(88, 1, 50, 'avatar'),
(89, 1, 50, 'avatar'),
(90, 1, 50, 'avatar'),
(91, 1, 50, 'avatar'),
(92, 1, 50, 'avatar'),
(93, 1, 50, 'avatar'),
(94, 1, 50, 'avatar'),
(95, 1, 50, 'avatar'),
(96, 1, 50, 'avatar'),
(97, 1, 50, 'avatar'),
(98, 1, 50, 'avatar'),
(99, 1, 50, 'avatar'),
(100, 1, 50, 'avatar'),
(101, 1, 50, 'avatar'),
(102, 1, 50, 'avatar'),
(103, 1, 50, 'avatar'),
(104, 1, 50, 'avatar'),
(105, 1, 50, 'avatar'),
(106, 1, 50, 'avatar'),
(107, 1, 50, 'avatar'),
(108, 1, 50, 'avatar'),
(109, 1, 50, 'avatar'),
(110, 1, 50, 'avatar'),
(111, 1, 50, 'avatar'),
(112, 1, 50, 'avatar'),
(113, 1, 50, 'avatar'),
(114, 1, 50, 'avatar'),
(115, 1, 50, 'avatar'),
(116, 1, 50, 'avatar'),
(117, 1, 50, 'avatar'),
(118, 1, 50, 'avatar'),
(119, 1, 50, 'avatar'),
(120, 1, 50, 'avatar'),
(121, 1, 50, 'avatar'),
(122, 1, 50, 'avatar'),
(123, 1, 50, 'avatar'),
(124, 1, 50, 'avatar'),
(125, 1, 50, 'avatar'),
(126, 1, 50, 'avatar'),
(127, 1, 50, 'avatar'),
(128, 1, 50, 'avatar'),
(129, 1, 50, 'avatar'),
(130, 1, 50, 'avatar'),
(131, 1, 50, 'avatar'),
(132, 1, 50, 'avatar'),
(133, 1, 50, 'avatar'),
(134, 1, 50, 'avatar'),
(135, 1, 50, 'avatar'),
(136, 1, 50, 'avatar'),
(137, 1, 50, 'avatar'),
(138, 1, 50, 'avatar'),
(139, 1, 50, 'avatar'),
(140, 1, 50, 'avatar'),
(141, 1, 50, 'avatar'),
(142, 1, 50, 'avatar'),
(143, 1, 50, 'avatar'),
(144, 1, 50, 'avatar'),
(145, 1, 50, 'avatar'),
(146, 1, 50, 'avatar'),
(147, 1, 50, 'avatar'),
(148, 1, 50, 'avatar'),
(149, 1, 50, 'avatar'),
(150, 1, 50, 'avatar'),
(151, 1, 50, 'avatar'),
(152, 1, 50, 'avatar'),
(153, 1, 50, 'avatar'),
(154, 1, 50, 'avatar'),
(155, 1, 50, 'avatar'),
(156, 1, 50, 'avatar'),
(157, 1, 50, 'avatar'),
(158, 1, 50, 'avatar'),
(159, 1, 50, 'avatar'),
(160, 1, 50, 'avatar'),
(161, 1, 50, 'avatar'),
(162, 1, 50, 'avatar'),
(163, 1, 50, 'avatar'),
(164, 1, 50, 'avatar'),
(165, 1, 50, 'avatar'),
(166, 1, 50, 'avatar'),
(167, 1, 50, 'avatar'),
(168, 1, 50, 'avatar'),
(169, 1, 50, 'avatar'),
(170, 1, 50, 'avatar'),
(171, 1, 50, 'avatar'),
(172, 1, 50, 'avatar'),
(173, 1, 50, 'avatar'),
(174, 1, 50, 'avatar'),
(175, 1, 50, 'avatar'),
(176, 1, 50, 'avatar'),
(177, 1, 50, 'avatar'),
(178, 1, 50, 'avatar'),
(179, 1, 50, 'avatar'),
(180, 1, 50, 'avatar'),
(181, 1, 50, 'avatar'),
(182, 1, 50, 'avatar'),
(183, 1, 50, 'avatar'),
(184, 1, 50, 'avatar'),
(185, 1, 50, 'avatar'),
(186, 1, 50, 'avatar'),
(187, 1, 50, 'avatar'),
(188, 1, 50, 'avatar'),
(189, 1, 50, 'avatar'),
(190, 1, 50, 'avatar'),
(191, 1, 50, 'avatar'),
(192, 1, 50, 'avatar'),
(193, 1, 50, 'avatar'),
(194, 1, 50, 'avatar'),
(195, 1, 50, 'avatar'),
(196, 1, 50, 'avatar'),
(197, 1, 50, 'avatar'),
(198, 1, 50, 'avatar'),
(199, 1, 50, 'avatar'),
(200, 1, 50, 'avatar'),
(201, 1, 50, 'avatar'),
(202, 1, 50, 'avatar'),
(203, 1, 50, 'avatar'),
(204, 1, 50, 'avatar'),
(205, 1, 50, 'avatar'),
(206, 1, 50, 'avatar'),
(207, 1, 50, 'avatar'),
(208, 1, 50, 'avatar'),
(209, 1, 50, 'avatar'),
(210, 1, 50, 'avatar'),
(211, 1, 50, 'avatar'),
(212, 1, 50, 'avatar'),
(213, 1, 50, 'avatar'),
(214, 1, 50, 'avatar'),
(215, 1, 50, 'avatar'),
(216, 1, 50, 'avatar'),
(217, 1, 50, 'avatar'),
(218, 1, 50, 'avatar'),
(219, 1, 50, 'avatar'),
(220, 1, 50, 'avatar'),
(221, 1, 50, 'avatar'),
(222, 1, 50, 'avatar'),
(223, 1, 50, 'avatar'),
(224, 1, 50, 'avatar'),
(225, 1, 50, 'avatar'),
(226, 1, 50, 'avatar'),
(227, 1, 50, 'avatar'),
(228, 1, 50, 'avatar'),
(229, 1, 50, 'avatar'),
(230, 1, 50, 'avatar'),
(231, 1, 50, 'avatar'),
(232, 1, 50, 'avatar'),
(233, 1, 50, 'avatar'),
(234, 1, 50, 'avatar'),
(235, 1, 50, 'avatar'),
(236, 1, 50, 'avatar'),
(237, 1, 50, 'avatar'),
(238, 1, 50, 'avatar'),
(239, 1, 50, 'avatar'),
(240, 1, 50, 'avatar'),
(241, 1, 50, 'avatar'),
(242, 1, 50, 'avatar'),
(243, 1, 50, 'avatar'),
(244, 1, 50, 'avatar'),
(245, 1, 50, 'avatar'),
(246, 1, 50, 'avatar'),
(247, 1, 50, 'avatar'),
(248, 1, 50, 'avatar'),
(249, 1, 50, 'avatar'),
(250, 1, 50, 'avatar'),
(251, 1, 50, 'avatar'),
(252, 1, 50, 'avatar'),
(253, 1, 50, 'avatar'),
(254, 1, 50, 'avatar'),
(255, 1, 50, 'avatar'),
(256, 1, 50, 'avatar'),
(257, 1, 50, 'avatar'),
(258, 1, 50, 'avatar'),
(259, 1, 50, 'avatar'),
(260, 1, 50, 'avatar'),
(261, 1, 50, 'avatar'),
(262, 1, 50, 'avatar'),
(263, 1, 50, 'avatar'),
(264, 1, 50, 'avatar'),
(265, 1, 50, 'avatar'),
(266, 1, 50, 'avatar'),
(267, 1, 50, 'avatar'),
(268, 1, 50, 'avatar'),
(269, 1, 50, 'avatar'),
(270, 1, 50, 'avatar');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` char(64) NOT NULL,
  `rank` enum('user','vip','mod','admin','manager','owner') NOT NULL DEFAULT 'user',
  `ip_registered` varchar(1000) NOT NULL,
  `ip` varchar(1000) NOT NULL,
  `registered` datetime NOT NULL,
  `last_login` datetime NOT NULL,
  `avatar` int(11) NOT NULL DEFAULT 0,
  `coins` int(11) NOT NULL DEFAULT 2000
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `rank`, `ip_registered`, `ip`, `registered`, `last_login`, `avatar`, `coins`) VALUES
(1, 'OvB', 'f707fdda7c874ff49ebfb2c88a2860c5ff4ce3d94a21efb76566ad0f92c9ad57', 'user', '127.0.0.1', '127.0.0.1', '2024-10-06 10:20:46', '2024-10-06 10:25:57', 0, 2000),
(2, 'OvB2', 'f707fdda7c874ff49ebfb2c88a2860c5ff4ce3d94a21efb76566ad0f92c9ad57', 'user', '127.0.0.1', '127.0.0.1', '2024-10-06 10:22:00', '2024-10-06 10:26:00', 0, 2000);

-- --------------------------------------------------------

--
-- Structure de la table `users_friends`
--

CREATE TABLE `users_friends` (
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users_friends`
--

INSERT INTO `users_friends` (`user_id`, `friend_id`) VALUES
(2, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `users_items`
--

CREATE TABLE `users_items` (
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users_stats`
--

CREATE TABLE `users_stats` (
  `user_id` int(11) NOT NULL,
  `elo` int(11) NOT NULL DEFAULT 0,
  `level_xp` int(11) NOT NULL DEFAULT 0,
  `games_won` int(11) NOT NULL DEFAULT 0,
  `games_lost` int(11) NOT NULL DEFAULT 0,
  `best_streak` int(11) NOT NULL DEFAULT 0,
  `shots` int(11) NOT NULL DEFAULT 0,
  `goals` int(11) NOT NULL DEFAULT 0,
  `hat_tricks` int(11) NOT NULL DEFAULT 0,
  `assists` int(11) NOT NULL DEFAULT 0,
  `saves` int(11) NOT NULL DEFAULT 0,
  `played_gk` int(11) NOT NULL DEFAULT 0,
  `cs` int(11) NOT NULL DEFAULT 0,
  `pass_successful` int(11) NOT NULL DEFAULT 0,
  `pass_missed` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users_stats`
--

INSERT INTO `users_stats` (`user_id`, `elo`, `level_xp`, `games_won`, `games_lost`, `best_streak`, `shots`, `goals`, `hat_tricks`, `assists`, `saves`, `played_gk`, `cs`, `pass_successful`, `pass_missed`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chatlogs`
--
ALTER TABLE `chatlogs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sanctions`
--
ALTER TABLE `sanctions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `shop_category`
--
ALTER TABLE `shop_category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `shop_items`
--
ALTER TABLE `shop_items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chatlogs`
--
ALTER TABLE `chatlogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `sanctions`
--
ALTER TABLE `sanctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `shop_category`
--
ALTER TABLE `shop_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `shop_items`
--
ALTER TABLE `shop_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=271;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
