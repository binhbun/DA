/*
 Navicat Premium Data Transfer

 Source Server         : Binhbun
 Source Server Type    : MariaDB
 Source Server Version : 100618
 Source Host           : 127.0.0.1:3306
 Source Schema         : traffic

 Target Server Type    : MariaDB
 Target Server Version : 100618
 File Encoding         : 65001

 Date: 31/08/2024 17:34:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `price` double NOT NULL,
  `domain` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES (1, 1, 0.00012, 'trafficdownload1s.com', 1, '2023-01-13 13:10:27', '2023-04-10 00:35:37');

-- ----------------------------
-- Table structure for coupons
-- ----------------------------
DROP TABLE IF EXISTS `coupons`;
CREATE TABLE `coupons`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiry_date` date NULL DEFAULT NULL,
  `min_amount` bigint(10) NOT NULL,
  `discount` decimal(10, 3) NOT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT current_timestamp,
  `updated_at` timestamp(0) NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `code`(`code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of coupons
-- ----------------------------
INSERT INTO `coupons` VALUES (13, 'N50', NULL, 50000000, 5.000, '2024-08-23 17:00:52', '2024-08-23 17:01:57');
INSERT INTO `coupons` VALUES (14, 'N100', NULL, 100000000, 10.000, '2024-08-23 19:52:09', '2024-08-23 19:52:29');

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `view_of_link_id` bigint(20) NOT NULL,
  `invoice_id` double NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 240269 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for invoice_money
-- ----------------------------
DROP TABLE IF EXISTS `invoice_money`;
CREATE TABLE `invoice_money`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `date_pay` timestamp(0) NULL DEFAULT NULL,
  `money` bigint(20) NOT NULL DEFAULT 0,
  `order_code` char(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `money1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_us`(`user_id`) USING BTREE,
  INDEX `idx_user_id`(`created_at`, `status`, `user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1517 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for invoice_users
-- ----------------------------
DROP TABLE IF EXISTS `invoice_users`;
CREATE TABLE `invoice_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `date_pay` timestamp(0) NULL DEFAULT NULL,
  `total_money` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 348 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for invoices
-- ----------------------------
DROP TABLE IF EXISTS `invoices`;
CREATE TABLE `invoices`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `date_pay` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_us`(`user_id`) USING BTREE,
  INDEX `idx_user_id`(`created_at`, `status`, `user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for links
-- ----------------------------
DROP TABLE IF EXISTS `links`;
CREATE TABLE `links`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `sublink` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `linkfile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `aliases` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `type` int(11) NOT NULL DEFAULT 1,
  `token` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `links_slug_unique`(`aliases`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `id_status`(`status`) USING BTREE,
  INDEX `idx_type_token`(`type`, `token`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 95627 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for merchant_links
-- ----------------------------
DROP TABLE IF EXISTS `merchant_links`;
CREATE TABLE `merchant_links`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `link_page` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `created_at` date NULL DEFAULT NULL,
  `updated_at` date NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (12, '2023_09_04_190510_user_attributes', 1);

-- ----------------------------
-- Table structure for money
-- ----------------------------
DROP TABLE IF EXISTS `money`;
CREATE TABLE `money`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `view` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of money
-- ----------------------------
INSERT INTO `money` VALUES (1, 1, 1000000000, 1, 2, NULL, '2023-03-10 05:05:02');

-- ----------------------------
-- Table structure for packages
-- ----------------------------
DROP TABLE IF EXISTS `packages`;
CREATE TABLE `packages`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `amount` bigint(11) NOT NULL,
  `coupon_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `discount` decimal(10, 3) NULL DEFAULT 0.000,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of packages
-- ----------------------------

-- ----------------------------
-- Table structure for pages
-- ----------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages`  (
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `link_page` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `type_id` int(11) NULL DEFAULT NULL,
  `view_per_day` int(11) NOT NULL DEFAULT 0,
  `total_view` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 2,
  `invoice_id` int(11) NOT NULL DEFAULT 0,
  `next_link_page` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `position` int(11) NULL DEFAULT NULL,
  `type_money` int(11) NOT NULL DEFAULT 0,
  `start_date` date NULL DEFAULT NULL,
  `end_date` date NULL DEFAULT NULL,
  `type_page` enum('v1','v2','available') CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT 'v1',
  `sort` int(11) NOT NULL DEFAULT 0,
  `code` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `image_code` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `code_content` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_status`(`status`) USING BTREE,
  INDEX `idx_us`(`invoice_id`) USING BTREE,
  INDEX `idz`(`type_id`) USING BTREE,
  INDEX `idx_test`(`user_id`, `status`) USING BTREE,
  INDEX `idx_start_date`(`start_date`) USING BTREE,
  INDEX `idx_end_date`(`end_date`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1570 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `active` int(11) NOT NULL DEFAULT 1,
  `phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `bank_account` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `bank_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `bank_number` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `user_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `data_source` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 144 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for setting
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of setting
-- ----------------------------
INSERT INTO `setting` VALUES (1, 'domain_default', 'https://trafficdownload1s.com', '2023-01-13 13:10:27', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (2, 'min', '400', '2023-01-13 22:10:29', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (3, 'config_ip', '0', '2023-01-14 00:57:10', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (4, 'price', '500', '2023-03-12 15:20:14', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (5, 'config_ip_page', '1000', '2023-05-26 17:19:21', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (6, 'is_insert', '1', '2023-06-29 16:18:46', '2024-06-10 17:35:46');
INSERT INTO `setting` VALUES (7, 'config_job_per_hour', '250', '2023-08-04 17:53:18', '2024-08-31 17:03:03');
INSERT INTO `setting` VALUES (8, 'is_pending_user', '1', '2023-10-13 13:40:38', '2024-08-31 17:03:03');

-- ----------------------------
-- Table structure for types
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `type_money` int(6) NULL DEFAULT NULL,
  `names` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_type_money`(`type_money`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES (1, 'Random time 55-65s.  ( 1000đ/ 1user)', '2023-03-11 10:52:43', '2024-08-29 22:26:07', 1000, 'User Google tìm kiếm (Gắn mã JS)');
INSERT INTO `types` VALUES (2, 'Random time Page 1:   70 - 80s  và Page 2: 15 - 20s  (1500đ/ 1user)', '2023-03-11 04:30:45', '2024-08-29 20:22:05', 1500, 'User Google tìm kiếm + Direct bài viết chỉ định');
INSERT INTO `types` VALUES (3, 'Time ngẫu nhiên từ user (1000đ/user)', '2024-03-02 18:39:54', '2024-08-29 20:22:09', 1000, 'User Google tìm kiếm (ID, Mã KM, Hotline,..)');

-- ----------------------------
-- Table structure for user_attributes
-- ----------------------------
DROP TABLE IF EXISTS `user_attributes`;
CREATE TABLE `user_attributes`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `model_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_idx`(`user_id`) USING BTREE,
  INDEX `model_type_idx`(`model_type`) USING BTREE,
  INDEX `usrid_modt_idx`(`user_id`, `model_type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 132 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `money` bigint(20) NULL DEFAULT 0,
  `role_active` int(11) NOT NULL DEFAULT 0,
  `pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `amount_spent` bigint(20) NOT NULL DEFAULT 0,
  `otp` int(255) NULL DEFAULT NULL,
  `hoten` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `diachi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `sdt` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE,
  INDEX `indx_test`(`role`, `money`, `amount_spent`) USING BTREE,
  INDEX `idx_role`(`role`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1131 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (5, 'traffic', 'montersvn@gmail.com', NULL, 3, '$2y$10$rxytjhuhtkHZpldI.Hj0MuBBH9AxagUlssH2vRpKZZ/YlutU8kioS', NULL, '2023-03-31 13:57:14', '2024-08-26 22:50:55', 2539853, 0, NULL, 1631000, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for view_link_ips
-- ----------------------------
DROP TABLE IF EXISTS `view_link_ips`;
CREATE TABLE `view_link_ips`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link_id` int(11) NOT NULL DEFAULT 0,
  `created_at` date NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_name`(`created_at`) USING BTREE,
  INDEX `idx_us`(`link_id`, `ip`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 502283 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for view_of_links
-- ----------------------------
DROP TABLE IF EXISTS `view_of_links`;
CREATE TABLE `view_of_links`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link_id` int(11) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `clicked` int(11) NOT NULL DEFAULT 0,
  `input_coded` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `idx_us`(`link_id`) USING BTREE,
  INDEX `id_status`(`created_at`) USING BTREE,
  INDEX `idz`(`status`) USING BTREE,
  INDEX `sdsd`(`price`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 174446 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for view_partners
-- ----------------------------
DROP TABLE IF EXISTS `view_partners`;
CREATE TABLE `view_partners`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `created_at` date NULL DEFAULT NULL,
  `updated_at` date NULL DEFAULT NULL,
  `page_id` int(11) NOT NULL DEFAULT 0,
  `ip` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `type_id` int(11) NOT NULL DEFAULT 1,
  `type_money` int(11) NOT NULL DEFAULT 0,
  `country` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_page_id`(`page_id`) USING BTREE,
  INDEX `idx_created_at`(`created_at`) USING BTREE,
  INDEX `idx_status`(`status`) USING BTREE,
  INDEX `idx_total`(`total`) USING BTREE,
  INDEX `type_idx`(`type_id`) USING BTREE,
  INDEX `idx_uer_ic`(`user_id`) USING BTREE,
  INDEX `idx_ip_created`(`ip`, `created_at`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 781861 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Table structure for views
-- ----------------------------
DROP TABLE IF EXISTS `views`;
CREATE TABLE `views`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `total` int(11) NOT NULL DEFAULT 0,
  `created_at` date NOT NULL DEFAULT '2000-06-04',
  `updated_at` date NULL DEFAULT NULL,
  `page_id` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE,
  INDEX `idx_page_id`(`page_id`) USING BTREE,
  INDEX `idx_created_at`(`created_at`) USING BTREE,
  INDEX `idx_status`(`status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of views
-- ----------------------------

-- ----------------------------
-- Table structure for webhook_detail
-- ----------------------------
DROP TABLE IF EXISTS `webhook_detail`;
CREATE TABLE `webhook_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 313 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;
