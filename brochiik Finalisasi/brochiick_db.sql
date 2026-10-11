-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2026 at 02:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brochiick_db`
--

--
-- Dumping data for table `pesan`
--

INSERT INTO `pesan` (`id`, `nama`, `email`, `pesan`, `tanggal`) VALUES
(1, 'Aufi', 'aufi@gmail.com', 'Saya ingin mengetahui informasi promo brochiik', '2026-10-06 00:30:07'),
(2, 'Gifar', 'gifar@gmail.com', 'Ayam nya enak', '2026-10-07 02:02:46'),
(3, 'andini', 'dini@gmail.com', 'beli ini', '2026-10-07 02:49:40'),
(4, 'karno', 'karno@gmail.com', 'request tambah kecap', '2026-10-07 03:15:40'),
(5, 'wawa', 'wawa@gmail.com', 'paket 1', '2026-10-11 10:17:05'),
(6, 'opi', 'opi@gmail.com', 'paket geprek', '2026-10-11 10:21:02'),
(7, 'aufi', 'aufi@gmail.com', 'Perbanyak menu', '2026-10-11 10:52:30'),
(8, 'budi', 'budi@gmail.com', 'Sambel kurang pedas', '2026-10-11 11:05:19'),
(9, 'opi', 'opi@gmail.com', 'Ayamnya empuk', '2026-10-11 11:37:02'),
(10, 'Najwa', 'wawa@gmail.com', 'Ayamnya Enak dan gurih', '2026-10-11 11:50:24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
