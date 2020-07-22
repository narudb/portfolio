CREATE DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER your_user_name@localhost IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON your_database_name.* TO your_user_name@localhost;
use your_database_name;

-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
	`project_title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_description` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_link` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_update` datetime DEFAULT CURRENT_TIMESTAMP,
  `project_date` datetime DEFAULT NULL,
  `project_img` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_id` int NOT NULL,
  `technologie_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_round_client1_idx` (`client_id`),
  KEY `fk_round_technologie1_idx` (`technologie_id`),
  CONSTRAINT `fk_round_client1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`),
  CONSTRAINT `fk_round_technologie1` FOREIGN KEY (`technologie_id`) REFERENCES `technologie` (`id`)
);

--
-- Table structure for table `technologie`
--

CREATE TABLE `technologie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `technologie_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `technologie_image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_mail` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_password` varchar(192) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);





