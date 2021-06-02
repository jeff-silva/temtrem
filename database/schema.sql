SET FOREIGN_KEY_CHECKS = 0;

-- create table emails 
CREATE TABLE IF NOT EXISTS `emails` (
  `id` int(11) NOT NULL,
  `from` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `to` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table failed_jobs 
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `connection` text COLLATE utf8_unicode_ci,
  `queue` text COLLATE utf8_unicode_ci,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table migrations 
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table password_resets 
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table settings 
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table temtrem_products 
CREATE TABLE IF NOT EXISTS `temtrem_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table temtrem_stores 
CREATE TABLE IF NOT EXISTS `temtrem_stores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table users 
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create table users_notifications 
CREATE TABLE IF NOT EXISTS `users_notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8_unicode_ci,
  `url` text COLLATE utf8_unicode_ci,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_users_notifications_users` (`user_id`),
  CONSTRAINT `FK_users_notifications_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `id` int(11) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `emails` MODIFY COLUMN `id` int(11) NOT NULL;

-- create field 'from' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `from` varchar(500) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field from 
ALTER TABLE `emails` MODIFY COLUMN `from` varchar(500) NULL;

-- create field 'to' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `to` varchar(500) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field to 
ALTER TABLE `emails` MODIFY COLUMN `to` varchar(500) NULL;

-- create field 'subject' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `subject` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field subject 
ALTER TABLE `emails` MODIFY COLUMN `subject` varchar(255) NULL;

-- create field 'body' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `body` text NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field body 
ALTER TABLE `emails` MODIFY COLUMN `body` text NULL DEFAULT NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `created_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `emails` MODIFY COLUMN `created_at` timestamp NULL;

-- create field 'updated_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `emails` ADD COLUMN `updated_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field updated_at 
ALTER TABLE `emails` MODIFY COLUMN `updated_at` timestamp NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `failed_jobs` MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;

-- create field 'uuid' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `uuid` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field uuid 
ALTER TABLE `failed_jobs` MODIFY COLUMN `uuid` varchar(255) NULL;

-- create field 'connection' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `connection` text NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field connection 
ALTER TABLE `failed_jobs` MODIFY COLUMN `connection` text NULL DEFAULT NULL;

-- create field 'queue' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `queue` text NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field queue 
ALTER TABLE `failed_jobs` MODIFY COLUMN `queue` text NULL DEFAULT NULL;

-- create field 'payload' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `payload` longtext NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field payload 
ALTER TABLE `failed_jobs` MODIFY COLUMN `payload` longtext NOT NULL;

-- create field 'exception' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `exception` longtext NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field exception 
ALTER TABLE `failed_jobs` MODIFY COLUMN `exception` longtext NOT NULL;

-- create field 'failed_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `failed_jobs` ADD COLUMN `failed_at` timestamp NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field failed_at 
ALTER TABLE `failed_jobs` MODIFY COLUMN `failed_at` timestamp NOT NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `migrations` ADD COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `migrations` MODIFY COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT;

-- create field 'migration' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `migrations` ADD COLUMN `migration` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field migration 
ALTER TABLE `migrations` MODIFY COLUMN `migration` varchar(255) NOT NULL;

-- create field 'batch' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `migrations` ADD COLUMN `batch` int(11) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field batch 
ALTER TABLE `migrations` MODIFY COLUMN `batch` int(11) NOT NULL;

-- create field 'email' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `password_resets` ADD COLUMN `email` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field email 
ALTER TABLE `password_resets` MODIFY COLUMN `email` varchar(255) NOT NULL;

-- create field 'token' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `password_resets` ADD COLUMN `token` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field token 
ALTER TABLE `password_resets` MODIFY COLUMN `token` varchar(255) NOT NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `password_resets` ADD COLUMN `created_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `password_resets` MODIFY COLUMN `created_at` timestamp NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `settings` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `settings` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

-- create field 'name' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `settings` ADD COLUMN `name` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field name 
ALTER TABLE `settings` MODIFY COLUMN `name` varchar(255) NOT NULL;

-- create field 'value' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `settings` ADD COLUMN `value` text NOT NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field value 
ALTER TABLE `settings` MODIFY COLUMN `value` text NOT NULL DEFAULT NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_products` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `temtrem_products` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

-- create field 'name' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_products` ADD COLUMN `name` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field name 
ALTER TABLE `temtrem_products` MODIFY COLUMN `name` varchar(255) NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_products` ADD COLUMN `created_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `temtrem_products` MODIFY COLUMN `created_at` datetime NULL DEFAULT NULL;

-- create field 'updated_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_products` ADD COLUMN `updated_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field updated_at 
ALTER TABLE `temtrem_products` MODIFY COLUMN `updated_at` datetime NULL DEFAULT NULL;

-- create field 'deleted_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_products` ADD COLUMN `deleted_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field deleted_at 
ALTER TABLE `temtrem_products` MODIFY COLUMN `deleted_at` datetime NULL DEFAULT NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_stores` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `temtrem_stores` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

-- create field 'name' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_stores` ADD COLUMN `name` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field name 
ALTER TABLE `temtrem_stores` MODIFY COLUMN `name` varchar(255) NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_stores` ADD COLUMN `created_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `temtrem_stores` MODIFY COLUMN `created_at` datetime NULL DEFAULT NULL;

-- create field 'updated_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_stores` ADD COLUMN `updated_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field updated_at 
ALTER TABLE `temtrem_stores` MODIFY COLUMN `updated_at` datetime NULL DEFAULT NULL;

-- create field 'deleted_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `temtrem_stores` ADD COLUMN `deleted_at` datetime NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field deleted_at 
ALTER TABLE `temtrem_stores` MODIFY COLUMN `deleted_at` datetime NULL DEFAULT NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `users` MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;

-- create field 'name' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `name` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field name 
ALTER TABLE `users` MODIFY COLUMN `name` varchar(255) NULL;

-- create field 'email' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `email` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field email 
ALTER TABLE `users` MODIFY COLUMN `email` varchar(255) NOT NULL;

-- create field 'email_verified_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `email_verified_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field email_verified_at 
ALTER TABLE `users` MODIFY COLUMN `email_verified_at` timestamp NULL;

-- create field 'password' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `password` varchar(255) NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field password 
ALTER TABLE `users` MODIFY COLUMN `password` varchar(255) NOT NULL;

-- create field 'remember_token' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `remember_token` varchar(100) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field remember_token 
ALTER TABLE `users` MODIFY COLUMN `remember_token` varchar(100) NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `created_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NULL;

-- create field 'updated_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users` ADD COLUMN `updated_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field updated_at 
ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp NULL;

-- create field 'id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field id 
ALTER TABLE `users_notifications` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

-- create field 'user_id' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `user_id` bigint(20) unsigned NOT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field user_id 
ALTER TABLE `users_notifications` MODIFY COLUMN `user_id` bigint(20) unsigned NOT NULL;

-- create field 'title' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `title` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field title 
ALTER TABLE `users_notifications` MODIFY COLUMN `title` varchar(255) NULL;

-- create field 'body' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `body` text NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field body 
ALTER TABLE `users_notifications` MODIFY COLUMN `body` text NULL DEFAULT NULL;

-- create field 'url' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `url` text NULL DEFAULT NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field url 
ALTER TABLE `users_notifications` MODIFY COLUMN `url` text NULL DEFAULT NULL;

-- create field 'image' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `image` varchar(255) NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field image 
ALTER TABLE `users_notifications` MODIFY COLUMN `image` varchar(255) NULL;

-- create field 'created_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `created_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field created_at 
ALTER TABLE `users_notifications` MODIFY COLUMN `created_at` timestamp NULL;

-- create field 'updated_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `updated_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field updated_at 
ALTER TABLE `users_notifications` MODIFY COLUMN `updated_at` timestamp NULL;

-- create field 'deleted_at' if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE `users_notifications` ADD COLUMN `deleted_at` timestamp NULL;;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

-- modify field deleted_at 
ALTER TABLE `users_notifications` MODIFY COLUMN `deleted_at` timestamp NULL;

-- creating fk if not exists
DROP PROCEDURE IF EXISTS `_temporary`; DELIMITER //
CREATE PROCEDURE `_temporary`() BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;
	ALTER TABLE users_notifications ADD CONSTRAINT FK_users_notifications_users FOREIGN KEY (user_id) REFERENCES users(id);;
END // DELIMITER ; CALL _temporary();
DROP PROCEDURE IF EXISTS `_temporary`;

SET FOREIGN_KEY_CHECKS = 1;