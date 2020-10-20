-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2020 at 12:24 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatchy`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_owner` int(11) NOT NULL,
  `contact_saved` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_owner`, `contact_saved`) VALUES
(1, 11, 23),
(2, 23, 11),
(3, 11, 19),
(4, 23, 13),
(5, 13, 23),
(6, 23, 20),
(7, 13, 20),
(9, 21, 23),
(10, 27, 23),
(12, 13, 20),
(13, 28, 23),
(14, 23, 28),
(15, 28, 20),
(16, 28, 13),
(17, 28, 19),
(19, 11, 13),
(20, 23, 19),
(21, 31, 19);

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `group_room` varchar(150) NOT NULL,
  `group_name` varchar(150) NOT NULL,
  `group_image` varchar(255) NOT NULL,
  `group_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `group_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(11) NOT NULL,
  `member_user` int(11) NOT NULL,
  `member_group` int(11) NOT NULL,
  `member_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `message_sender` int(11) NOT NULL,
  `message_receiver` int(11) NOT NULL,
  `message_chat` varchar(255) NOT NULL,
  `message_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `message_seen_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `message_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `message_sender`, `message_receiver`, `message_chat`, `message_created_at`, `message_seen_at`, `message_status`) VALUES
(1, 1, 2, 'Haloo salsa, selamat malam', '2020-09-25 12:30:08', '0000-00-00 00:00:00', 1),
(2, 2, 1, 'Iya halo arqi, malam', '2020-09-25 12:30:12', '0000-00-00 00:00:00', 1),
(3, 1, 2, 'Apa kabar ?', '2020-09-25 12:30:19', '0000-00-00 00:00:00', 1),
(4, 2, 1, 'Kabar baik', '2020-09-25 12:30:25', '0000-00-00 00:00:00', 1),
(6, 11, 23, 'asdas', '2020-09-27 13:31:41', '0000-00-00 00:00:00', 1),
(7, 23, 11, 'asdsad', '2020-09-27 13:31:50', '0000-00-00 00:00:00', 1),
(8, 11, 23, 'arki', '2020-09-27 13:31:55', '0000-00-00 00:00:00', 1),
(9, 23, 11, 'asd', '2020-09-27 13:32:59', '0000-00-00 00:00:00', 1),
(10, 23, 11, 'asdaasdadasd', '2020-09-27 13:33:05', '0000-00-00 00:00:00', 1),
(11, 23, 11, 'Kamu sekarang tinggal dimana ?', '2020-09-27 13:08:58', '0000-00-00 00:00:00', 0),
(12, 11, 23, 'haai', '2020-09-27 13:34:33', '0000-00-00 00:00:00', 1),
(13, 11, 11, 'haaai', '2020-09-27 13:34:41', '0000-00-00 00:00:00', 1),
(14, 11, 23, 'haai', '2020-09-27 13:34:46', '0000-00-00 00:00:00', 1),
(15, 23, 11, 'noo', '2020-09-27 13:34:55', '0000-00-00 00:00:00', 1),
(16, 11, 23, 'nezuko', '2020-09-27 13:35:17', '0000-00-00 00:00:00', 1),
(17, 23, 11, 'aas', '2020-09-27 13:35:25', '0000-00-00 00:00:00', 1),
(18, 11, 23, 'asd', '2020-09-27 13:36:07', '0000-00-00 00:00:00', 1),
(19, 23, 11, 'haa', '2020-09-27 13:36:13', '0000-00-00 00:00:00', 1),
(20, 11, 11, 'asdasd', '2020-09-27 13:36:46', '0000-00-00 00:00:00', 1),
(21, 11, 11, 'nooo', '2020-09-27 13:36:53', '0000-00-00 00:00:00', 1),
(22, 11, 23, 'asasd', '2020-09-27 13:36:58', '0000-00-00 00:00:00', 1),
(23, 11, 11, 'yy', '2020-09-27 13:37:02', '0000-00-00 00:00:00', 1),
(24, 23, 11, 'asdasd', '2020-09-27 13:44:49', '0000-00-00 00:00:00', 1),
(25, 23, 23, 'Haloo ijiq, selamat pagi', '2020-09-27 23:15:15', '0000-00-00 00:00:00', 1),
(26, 23, 11, 'Hallooo ijiq kun', '2020-09-27 23:15:53', '0000-00-00 00:00:00', 1),
(27, 11, 23, 'test', '2020-09-27 23:16:20', '0000-00-00 00:00:00', 1),
(28, 11, 23, 'Haii nezuko chaaaan', '2020-09-27 23:16:34', '0000-00-00 00:00:00', 1),
(29, 23, 11, 'Apa kabar ijiq kuun', '2020-09-27 23:19:21', '0000-00-00 00:00:00', 1),
(30, 23, 11, 'test', '2020-09-27 23:19:32', '0000-00-00 00:00:00', 1),
(31, 11, 23, 'test', '2020-09-27 23:19:45', '0000-00-00 00:00:00', 1),
(32, 11, 11, 'test', '2020-09-27 23:19:52', '0000-00-00 00:00:00', 1),
(33, 11, 23, 'test', '2020-09-28 03:09:33', '0000-00-00 00:00:00', 1),
(34, 23, 23, 'haloo', '2020-09-28 03:09:47', '0000-00-00 00:00:00', 1),
(35, 23, 11, 'haloo', '2020-09-28 03:09:53', '0000-00-00 00:00:00', 1),
(36, 23, 11, '.', '2020-09-28 06:39:14', '0000-00-00 00:00:00', 1),
(37, 11, 23, '.', '2020-09-28 06:48:20', '0000-00-00 00:00:00', 1),
(38, 23, 11, '.', '2020-09-28 08:02:20', '0000-00-00 00:00:00', 1),
(39, 11, 23, '.', '2020-09-28 08:13:49', '0000-00-00 00:00:00', 1),
(40, 23, 11, 'halo arqiii', '2020-09-28 08:19:11', '0000-00-00 00:00:00', 1),
(41, 23, 11, '.', '2020-09-28 08:43:44', '0000-00-00 00:00:00', 1),
(42, 11, 23, '.hhhhhhhhhh', '2020-09-28 08:44:39', '0000-00-00 00:00:00', 1),
(43, 23, 11, 'ewrwy', '2020-09-28 08:47:47', '0000-00-00 00:00:00', 1),
(44, 23, 11, 'haiii', '2020-09-28 08:50:35', '0000-00-00 00:00:00', 1),
(45, 23, 11, 'loool', '2020-09-28 08:51:19', '0000-00-00 00:00:00', 1),
(46, 23, 11, 'halo bro', '2020-09-28 09:00:48', '0000-00-00 00:00:00', 1),
(48, 23, 11, 'holaa', '2020-09-28 09:08:52', '0000-00-00 00:00:00', 1),
(49, 23, 11, 'haloo bos', '2020-09-28 09:10:51', '0000-00-00 00:00:00', 1),
(50, 23, 13, 'halo mang adee', '2020-09-28 09:12:43', '0000-00-00 00:00:00', 1),
(51, 23, 11, 'asdasdasd', '2020-09-28 09:15:11', '0000-00-00 00:00:00', 1),
(52, 23, 11, 'bre', '2020-09-28 09:22:49', '0000-00-00 00:00:00', 1),
(53, 23, 13, 'mang', '2020-09-28 09:23:10', '0000-00-00 00:00:00', 1),
(54, 23, 11, 'hey', '2020-09-28 09:23:22', '0000-00-00 00:00:00', 1),
(55, 23, 13, 'hey', '2020-09-28 09:23:30', '0000-00-00 00:00:00', 1),
(56, 13, 23, 'halo neng nezuko', '2020-09-28 09:35:39', '0000-00-00 00:00:00', 1),
(57, 13, 23, 'haloo', '2020-09-28 09:36:06', '0000-00-00 00:00:00', 1),
(58, 23, 13, 'de', '2020-09-28 09:36:59', '0000-00-00 00:00:00', 1),
(59, 13, 23, 'test', '2020-09-28 12:22:33', '0000-00-00 00:00:00', 1),
(60, 23, 11, 'test', '2020-09-28 12:41:05', '0000-00-00 00:00:00', 1),
(61, 13, 23, 'hey', '2020-09-28 16:06:04', '0000-00-00 00:00:00', 1),
(62, 23, 13, 'apaa', '2020-09-28 16:06:23', '0000-00-00 00:00:00', 1),
(63, 23, 21, 'hey neng, kata layla nanti ngajakin nonton ke bioskop', '2020-09-29 02:57:05', '0000-00-00 00:00:00', 1),
(64, 21, 23, 'halii nezuko chan', '2020-09-29 02:59:09', '0000-00-00 00:00:00', 1),
(65, 21, 23, 'ih gaboleh ai kamu, kan lagi pandemi', '2020-09-29 02:59:25', '0000-00-00 00:00:00', 1),
(66, 21, 23, 'main ke rumah aku aja atuh', '2020-09-29 02:59:35', '0000-00-00 00:00:00', 1),
(67, 23, 21, 'test chat', '2020-09-29 03:00:08', '0000-00-00 00:00:00', 1),
(68, 27, 23, 'Halooo nezuko chan', '2020-09-29 04:23:27', '0000-00-00 00:00:00', 1),
(69, 27, 23, 'teest', '2020-09-29 04:23:41', '0000-00-00 00:00:00', 1),
(70, 23, 27, 'test', '2020-09-29 04:24:15', '0000-00-00 00:00:00', 1),
(71, 23, 27, 'halooo kakak zilong', '2020-09-29 04:24:34', '0000-00-00 00:00:00', 1),
(72, 27, 23, '.', '2020-09-29 04:24:48', '0000-00-00 00:00:00', 1),
(73, 23, 27, 'testtest', '2020-09-29 04:25:07', '0000-00-00 00:00:00', 1),
(74, 23, 11, 'test', '2020-09-29 04:25:40', '0000-00-00 00:00:00', 1),
(75, 23, 11, 'test', '2020-09-29 04:25:56', '0000-00-00 00:00:00', 1),
(76, 11, 23, 'test', '2020-09-29 04:26:14', '0000-00-00 00:00:00', 1),
(77, 23, 11, 'test', '2020-10-15 05:42:01', '0000-00-00 00:00:00', 1),
(78, 23, 21, 'test', '2020-10-15 05:42:20', '0000-00-00 00:00:00', 1),
(79, 28, 23, 'halo', '2020-10-15 06:33:50', '0000-00-00 00:00:00', 1),
(80, 28, 23, 'hello', '2020-10-15 06:34:05', '0000-00-00 00:00:00', 1),
(81, 23, 28, 'test', '2020-10-15 06:34:34', '0000-00-00 00:00:00', 1),
(82, 28, 23, 'haii', '2020-10-15 06:34:52', '0000-00-00 00:00:00', 1),
(83, 28, 23, 'test', '2020-10-15 06:35:36', '0000-00-00 00:00:00', 1),
(84, 23, 28, 'hai popol', '2020-10-15 06:36:00', '0000-00-00 00:00:00', 1),
(85, 28, 23, 'halo nezuko chan', '2020-10-15 06:36:08', '0000-00-00 00:00:00', 1),
(86, 27, 23, 'test', '2020-10-15 06:41:33', '0000-00-00 00:00:00', 1),
(87, 23, 11, 'cek', '2020-10-18 09:27:18', '0000-00-00 00:00:00', 1),
(88, 23, 13, 'cek', '2020-10-18 09:27:35', '0000-00-00 00:00:00', 1),
(89, 23, 20, 'wey', '2020-10-18 09:27:49', '0000-00-00 00:00:00', 1),
(90, 23, 19, 'woy', '2020-10-18 09:28:48', '0000-00-00 00:00:00', 1),
(91, 23, 11, 'test chaaat', '2020-10-19 01:50:52', '0000-00-00 00:00:00', 1),
(92, 11, 23, 'haloo', '2020-10-19 01:58:53', '0000-00-00 00:00:00', 1),
(93, 23, 13, 'test', '2020-10-19 06:37:06', '0000-00-00 00:00:00', 1),
(94, 23, 13, 'wey', '2020-10-19 06:49:38', '0000-00-00 00:00:00', 1),
(95, 23, 19, 'hai mang ihin', '2020-10-19 07:21:08', '0000-00-00 00:00:00', 1),
(96, 23, 19, '', '2020-10-19 07:21:09', '0000-00-00 00:00:00', 1),
(97, 23, 28, 'hai popol', '2020-10-19 07:22:09', '0000-00-00 00:00:00', 1),
(98, 23, 11, 'eqqq', '2020-10-20 02:01:59', '0000-00-00 00:00:00', 1),
(99, 23, 11, 'asd', '2020-10-20 02:17:15', '0000-00-00 00:00:00', 1),
(100, 23, 13, 'asda', '2020-10-20 02:20:24', '0000-00-00 00:00:00', 1),
(101, 23, 13, 'asdad', '2020-10-20 02:20:27', '0000-00-00 00:00:00', 1),
(102, 23, 11, 'asd', '2020-10-20 02:21:13', '0000-00-00 00:00:00', 1),
(103, 23, 11, 'asd', '2020-10-20 02:28:44', '0000-00-00 00:00:00', 1),
(104, 23, 11, 'weew', '2020-10-20 02:37:29', '0000-00-00 00:00:00', 1),
(105, 23, 13, 'weyy', '2020-10-20 02:52:59', '0000-00-00 00:00:00', 1),
(106, 23, 11, 'hai arqi', '2020-10-20 03:19:23', '0000-00-00 00:00:00', 1),
(107, 23, 20, 'ih ga dibales :(', '2020-10-20 03:19:48', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_nickname` varchar(255) DEFAULT NULL,
  `user_name` varchar(150) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `user_phone` int(11) NOT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `user_bio` varchar(255) DEFAULT NULL,
  `user_longitude` varchar(255) DEFAULT NULL,
  `user_latitude` varchar(255) DEFAULT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_nickname`, `user_name`, `user_email`, `user_password`, `user_phone`, `user_image`, `user_bio`, `user_longitude`, `user_latitude`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'Arqi Alfaritsi', 'arqi', 'arqi.alfaritsi21@gmail.com', 'Chatchy21!', 857248146, '', '', '', '', '2020-09-26 14:17:28', '0000-00-00 00:00:00', 1),
(2, 'Salsa Almaariz', 'salsa', 'salsa@gmail.com', '$2b$10$vwsBmzkHA2vxIuyWwsVoTOxPpT3G6nE.huDVlLXqs9jDD99mcQHMa', 857248145, '', '', '', '', '2020-09-25 10:56:25', '0000-00-00 00:00:00', 1),
(3, 'Djanbi Dumadi', 'djanbi12', 'djanbi@gmail.com', '$2b$10$uPJsffhdMkGU9./ARYRtQ.wueDckdOGzaOZ5SiubE2cgQagJeL7Yy', 123456, '2020-09-27T10-26-27.684Z-Penguins.jpg', 'Halo Nama saya djanbi dumadi', '', '', '2020-09-27 10:26:28', '2020-09-27 10:26:28', 1),
(4, 'Arqi Clone', 'arqi2', 'arqi2@gmail.com', '$2b$10$T9MH.nxRxObOgqV7iXovt.2EfMSmt0ubm44yxfGR7BjeIzN5W9XT6', 2147483647, NULL, '', '', '', '2020-09-25 06:14:25', '0000-00-00 00:00:00', 0),
(5, NULL, 'wahyu', 'wahyu@gmail.com', '$2b$10$ntqinbUaSC0X7y8RXJ9oLuGHXKBOqWr1EHRizq25mVVNC8eeiQi12', 2147483647, NULL, '', '', '', '2020-09-25 06:46:40', '0000-00-00 00:00:00', 0),
(6, NULL, 'nurul', 'nurul@gmail.com', '$2b$10$yjwXrhbmFfVgCJUrXOeNSuoPEv1TwqGjDSUcDdVIHvc6y9c7Wv8uW', 2147483647, NULL, '', '', '', '2020-09-25 06:49:01', '0000-00-00 00:00:00', 0),
(7, NULL, 'sofa', 'sofa@gmail.com', '$2b$10$7U0t0gnzyRf2HCWngFQPnunqoL7uiTrXd3.rm/Ji0Dw3ty5CqBr2K', 2147483647, NULL, '', '', '', '2020-09-25 06:51:57', '0000-00-00 00:00:00', 0),
(8, NULL, 'nada', 'nada@gmail.com', '$2b$10$tQysHFbHBks8GEnZnCXggeGLYoFhLsb1L00oKxjHweW0Md6bVKbO6', 2147483647, NULL, '', '', '', '2020-09-25 06:53:48', '0000-00-00 00:00:00', 0),
(9, NULL, 'syabbi', 'syabbi@gmail.com', '$2b$10$t5Q8WO.LLfGbiDz5lf6wz.DDWjqFehunHVBatBrua.POaBOXOscme', 2147483647, NULL, '', '', '', '2020-09-25 06:56:33', '0000-00-00 00:00:00', 0),
(10, NULL, 'ariq', 'ariq@gmail.com', '$2b$10$9lOtbgqEy4bYhJsgEnw7tul7nYsse0.NdcWhlux3ZIRDPELtxZ6ra', 1234456, NULL, NULL, '', '', '2020-09-26 04:53:22', '0000-00-00 00:00:00', 0),
(11, 'Arqi Alfaritsi', 'arqii', 'ijiq@gmail.com', '$2b$10$rYjq9opcSQvRb66X3YD75uFBsFxbSZmCDip4Y62mQ7BVr7vkFEXwu', 8512342, '2020-09-27T11-07-59.408Z-WhatsApp Image 2020-09-04 at 09.20.34.jpeg', 'Haloooooo nama saya ijiq', '', '', '2020-09-28 01:24:45', '2020-09-27 11:08:00', 1),
(12, NULL, 'molly', 'molly@gmail.com', '$2b$10$dooxgVmuVBHvvHtbahqWsei4.9257KMPhCmepZgkX4ri24FY6X7RS', 123451, NULL, NULL, '', '', '2020-09-26 05:17:01', '0000-00-00 00:00:00', 0),
(13, 'Ade Londok', 'adelondok', 'adelondok@gmail.com', '$2b$10$Sukb9HsfiuHbqfQl/S6.2O/Bq14If8e3048FOY2fwt9HLpkN9KfSi', 81123234, '2020-09-28T09-34-45.725Z-1557124335906.jpg', 'Rasanya, seperti anda menjadi ironmen, belilah odading mang oleh didieu', '', '', '2020-09-28 09:34:45', '2020-09-28 09:34:45', 1),
(14, NULL, 'agria', 'agria@gmail.com', '$2b$10$e7N3SKNmlLf00vIKqu6YF.qDZrqJ3i4.gaSCcPDeE8557duShBtBG', 12313, NULL, NULL, '', '', '2020-09-27 02:18:25', '0000-00-00 00:00:00', 0),
(15, NULL, 'jami', 'jami@gmail.com', '$2b$10$ppWnuyf4kj9zJc9C2uGB8uC.3XSUFBsfukHtjmgvVwM9haymgJu/.', 1234567, NULL, NULL, '', '', '2020-09-27 02:20:29', '0000-00-00 00:00:00', 0),
(16, NULL, 'intan', 'intan@gmail.com', '$2b$10$DQg5V/7yrp486qqztdCq/esJFNKnI8n/15Rggvl1YWkbrhxDUtjoe', 1231234, NULL, NULL, '', '', '2020-09-27 02:21:38', '0000-00-00 00:00:00', 0),
(18, NULL, 'bre', 'bre@gmail.com', '$2b$10$uongN50sfMmUQbY57bAAQO5ShTUB3F3dUVmcfyoqbg4Ys2Zf5LIvG', 1231125, NULL, NULL, '', '', '2020-09-27 02:25:00', '0000-00-00 00:00:00', 0),
(19, 'Moskov Solihin', 'moskov', 'moskov@gmail.com', '$2b$10$Ss8dFkOwJN5Z1zTIF8RFjOOmOrT06oYjbok2HX.hzhec.ZNL/a4LK', 120120, '2020-09-27T03-44-37.058Z-Tulips.jpg', 'Moskov sekarang menjadi hijrah sehingga bernama moskov solih', '', '', '2020-09-27 03:44:37', '2020-09-27 03:44:37', 1),
(20, 'Asep Alucard', 'Alucard', 'alucard@gmail.com', '$2b$10$bGk6p/AzkepGQ5x3ykPms.EEz4i4d0/6Aai3IGhsgGLHoM8bnUoIa', 120121, '2020-09-27T03-50-12.359Z-Desert.jpg', 'Halo Ini adalah second account aku di mobile lejen', '', '', '2020-09-27 03:50:12', '2020-09-27 03:50:12', 1),
(21, 'Neng Miya', 'miya', 'miya@gmail.com', '$2b$10$i/DXyWIjQwql5MNsC1gE7ugrS.ztRiGytKOotwI/FSlKasDkK7UCC', 871234, '2020-09-29T02-58-42.867Z-Miya.png', 'Haii aku cape bgt nich', '', '', '2020-09-29 02:58:43', '2020-09-29 02:58:43', 1),
(22, 'Zenitsu Satset', 'Zenitsu', 'zenitsu@gmail.com', '$2b$10$sjj5R/cnEo0RV7hzu1bf.OXGAaat0YX8vE0/vPbEtJdM9nFSBoFlC', 8771234, '', 'FFFFFFFFFFFFFFFF', '', '', '2020-09-27 04:00:18', '2020-09-27 04:00:18', 1),
(23, 'Nezuko Chan', 'nezuko', 'nezuko@gmail.com', '$2b$10$X3Ek4gkAUC1ACMbYeScnAOk/tzOCRz.RZVw1rEw7TZUusKdZuXz5m', 898248, '2020-09-27T04-30-43.016Z-wallpaperflare.com_wallpaper (6).jpg', 'Onee Chan Ganbatte !!', '', '', '2020-09-27 04:30:43', '2020-09-27 04:30:43', 1),
(24, NULL, 'lesley', 'lesley@gmail.com', '$2b$10$RH8.pKC4X2OpyhGjwvP.r.TbqljWD84k74.5TyVYAn5k3W3fvxZ5G', 134231, NULL, NULL, NULL, NULL, '2020-09-27 23:05:54', '0000-00-00 00:00:00', 0),
(25, NULL, 'layla', 'layla@gmail.com', '$2b$10$sGatawfVaPzcHtkWVdB/xOj0cKLmS4OibfjKKjX1dOIxbiZxGb3Ye', 8678789, NULL, NULL, NULL, NULL, '2020-09-27 23:09:25', '0000-00-00 00:00:00', 0),
(26, NULL, 'roger', 'roger@gmail.com', '$2b$10$mCFFJjE74i085qHUBuJVy.JrpnPKvJxC1fW8lD5Lj71zGfMoxvfX2', 235467, NULL, NULL, NULL, NULL, '2020-09-27 23:11:29', '0000-00-00 00:00:00', 1),
(27, 'Zilong Shodiqin', 'zilong', 'zilong@gmail.com', '$2b$10$bkaSlu6w59U4AMep/SFfxO1uyuv4JkrwxG9sAVjbLudCrGswXA0We', 8912345, '2020-10-15T06-40-55.318Z-default.jpg', 'Saya sangat senang hari ini', NULL, NULL, '2020-10-15 06:40:55', '2020-10-15 06:40:55', 1),
(28, 'Popol And Kupa', 'popol', 'popol@gmail.com', '$2b$10$Ztch60b8wIC7IKnODxPVEuePR1NSgv3uve3sr4LSSfylTmM/UPt2G', 123432, '2020-10-15T06-32-43.634Z-Popol_and_Kupa.png', 'Popol and kupa are the best partners   in the world', NULL, NULL, '2020-10-15 06:32:43', '2020-10-15 06:32:43', 1),
(29, 'Abdul Granger', 'granger', 'granger@gmail.com', '$2b$10$8FlNrfzkxVWuWMa5HFzYI.BrcCIpcQS/6/Y7tMgm.EQudMBJhGiqm', 1235434, '2020-10-15T06-52-53.137Z-granger.jpg', 'Lets make this quick', NULL, NULL, '2020-10-15 06:52:53', '2020-10-15 06:52:53', 1),
(30, 'Lolita Sari', 'lolita', 'lolita@chatchy.com', '$2b$10$H8/Fsqrycrrf8plX3dex.O225XixVW.0ZBLAmj65pcMp5NxuYTj6K', 628754532, '2020-10-20T02-48-02.859Z-default.jpg', 'Dont worry my friend, i am your shield', NULL, NULL, '2020-10-20 02:48:02', '2020-10-20 02:48:02', 1),
(31, NULL, 'angela', 'angela@gmail.com', '$2b$10$pLJy3E9zQmETHnVNNk/dROEandUGDzu5V5/hhivCtCrfLU6SkLmcW', 628534234, '2020-10-20T02-48-02.859Z-default.jpg', NULL, NULL, NULL, '2020-10-20 02:49:27', '0000-00-00 00:00:00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `contact_owner` (`contact_owner`),
  ADD KEY `contact_saved` (`contact_saved`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `member_user` (`member_user`),
  ADD KEY `member_group` (`member_group`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `sender` (`message_sender`),
  ADD KEY `receiver` (`message_receiver`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`contact_owner`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `contact_ibfk_2` FOREIGN KEY (`contact_saved`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`member_group`) REFERENCES `groups` (`group_id`),
  ADD CONSTRAINT `member_ibfk_2` FOREIGN KEY (`member_user`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`message_sender`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`message_receiver`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
