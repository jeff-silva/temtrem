SET FOREIGN_KEY_CHECKS = 0;

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

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `value` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `temtrem_stores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `emails` ADD COLUMN `id` int(11) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `id` int(11) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'from')) THEN
    ALTER TABLE `emails` ADD COLUMN `from` varchar(500) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `from` varchar(500) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'to')) THEN
    ALTER TABLE `emails` ADD COLUMN `to` varchar(500) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `to` varchar(500) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'subject')) THEN
    ALTER TABLE `emails` ADD COLUMN `subject` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `subject` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'body')) THEN
    ALTER TABLE `emails` ADD COLUMN `body` text NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `body` text NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'created_at')) THEN
    ALTER TABLE `emails` ADD COLUMN `created_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `created_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'emails' AND COLUMN_NAME = 'updated_at')) THEN
    ALTER TABLE `emails` ADD COLUMN `updated_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `emails` MODIFY COLUMN `updated_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'uuid')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `uuid` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `uuid` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'connection')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `connection` text NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `connection` text NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'queue')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `queue` text NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `queue` text NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'payload')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `payload` longtext NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `payload` longtext NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'exception')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `exception` longtext NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `exception` longtext NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'failed_jobs' AND COLUMN_NAME = 'failed_at')) THEN
    ALTER TABLE `failed_jobs` ADD COLUMN `failed_at` timestamp NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `failed_jobs` MODIFY COLUMN `failed_at` timestamp NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'migrations' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `migrations` ADD COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `migrations` MODIFY COLUMN `id` int(10) unsigned NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'migrations' AND COLUMN_NAME = 'migration')) THEN
    ALTER TABLE `migrations` ADD COLUMN `migration` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `migrations` MODIFY COLUMN `migration` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'migrations' AND COLUMN_NAME = 'batch')) THEN
    ALTER TABLE `migrations` ADD COLUMN `batch` int(11) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `migrations` MODIFY COLUMN `batch` int(11) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'password_resets' AND COLUMN_NAME = 'email')) THEN
    ALTER TABLE `password_resets` ADD COLUMN `email` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `password_resets` MODIFY COLUMN `email` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'password_resets' AND COLUMN_NAME = 'token')) THEN
    ALTER TABLE `password_resets` ADD COLUMN `token` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `password_resets` MODIFY COLUMN `token` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'password_resets' AND COLUMN_NAME = 'created_at')) THEN
    ALTER TABLE `password_resets` ADD COLUMN `created_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `password_resets` MODIFY COLUMN `created_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'settings' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `settings` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `settings` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'settings' AND COLUMN_NAME = 'name')) THEN
    ALTER TABLE `settings` ADD COLUMN `name` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `settings` MODIFY COLUMN `name` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'settings' AND COLUMN_NAME = 'value')) THEN
    ALTER TABLE `settings` ADD COLUMN `value` text NOT NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `settings` MODIFY COLUMN `value` text NOT NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'temtrem_stores' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `temtrem_stores` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `temtrem_stores` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'temtrem_stores' AND COLUMN_NAME = 'name')) THEN
    ALTER TABLE `temtrem_stores` ADD COLUMN `name` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `temtrem_stores` MODIFY COLUMN `name` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'temtrem_stores' AND COLUMN_NAME = 'created_at')) THEN
    ALTER TABLE `temtrem_stores` ADD COLUMN `created_at` datetime NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `temtrem_stores` MODIFY COLUMN `created_at` datetime NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'temtrem_stores' AND COLUMN_NAME = 'updated_at')) THEN
    ALTER TABLE `temtrem_stores` ADD COLUMN `updated_at` datetime NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `temtrem_stores` MODIFY COLUMN `updated_at` datetime NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'temtrem_stores' AND COLUMN_NAME = 'deleted_at')) THEN
    ALTER TABLE `temtrem_stores` ADD COLUMN `deleted_at` datetime NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `temtrem_stores` MODIFY COLUMN `deleted_at` datetime NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `users` ADD COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'name')) THEN
    ALTER TABLE `users` ADD COLUMN `name` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `name` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'email')) THEN
    ALTER TABLE `users` ADD COLUMN `email` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `email` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'email_verified_at')) THEN
    ALTER TABLE `users` ADD COLUMN `email_verified_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `email_verified_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'password')) THEN
    ALTER TABLE `users` ADD COLUMN `password` varchar(255) NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `password` varchar(255) NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'remember_token')) THEN
    ALTER TABLE `users` ADD COLUMN `remember_token` varchar(100) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `remember_token` varchar(100) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'created_at')) THEN
    ALTER TABLE `users` ADD COLUMN `created_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users' AND COLUMN_NAME = 'updated_at')) THEN
    ALTER TABLE `users` ADD COLUMN `updated_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'id')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `id` int(11) NOT NULL AUTO_INCREMENT;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'user_id')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `user_id` bigint(20) unsigned NOT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `user_id` bigint(20) unsigned NOT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'title')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `title` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `title` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'body')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `body` text NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `body` text NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'url')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `url` text NULL DEFAULT NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `url` text NULL DEFAULT NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'image')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `image` varchar(255) NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `image` varchar(255) NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'created_at')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `created_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `created_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'updated_at')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `updated_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `updated_at` timestamp NULL;

DELIMITER $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
CREATE PROCEDURE _temp_procedure()
BEGIN
IF NOT EXISTS((SELECT COUNT(COLUMN_NAME) FROM INFORMATION_SCHEMA.columns WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'users_notifications' AND COLUMN_NAME = 'deleted_at')) THEN
    ALTER TABLE `users_notifications` ADD COLUMN `deleted_at` timestamp NULL;
END IF;
END $$
CALL _temp_procedure() $$
DROP PROCEDURE IF EXISTS _temp_procedure $$
DELIMITER ;

ALTER TABLE `users_notifications` MODIFY COLUMN `deleted_at` timestamp NULL;


SET FOREIGN_KEY_CHECKS = 1;