/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : story

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-12-28 17:21:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `administrator`
-- ----------------------------
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `admin_name` varchar(32) NOT NULL COMMENT '用户名',
  `admin_number` varchar(32) NOT NULL COMMENT '编号',
  `admin_password` varchar(32) NOT NULL COMMENT '密码',
  `admin_nick` varchar(32) NOT NULL DEFAULT '0' COMMENT '昵称',
  `admin_grade` tinyint(1) NOT NULL DEFAULT '0' COMMENT '级别',
  PRIMARY KEY (`admin_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of administrator
-- ----------------------------

-- ----------------------------
-- Table structure for `author`
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `author_name` varchar(32) NOT NULL COMMENT '用户名',
  `author_number` varchar(32) NOT NULL COMMENT '编号',
  `author_password` varchar(32) NOT NULL COMMENT '密码',
  `author_nick` varchar(32) NOT NULL COMMENT '昵称',
  `author_grade` varchar(32) NOT NULL DEFAULT '0' COMMENT '级别',
  `author_votes` int(16) NOT NULL DEFAULT '0' COMMENT '推荐票数',
  `author_integral` int(16) NOT NULL DEFAULT '0' COMMENT '积分',
  `author_workd` varchar(32) NOT NULL COMMENT '作品',
  PRIMARY KEY (`author_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of author
-- ----------------------------

-- ----------------------------
-- Table structure for `book`
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `book_number` varchar(16) NOT NULL COMMENT '书号',
  `book_name` varchar(16) NOT NULL COMMENT '书名',
  `author` varchar(16) NOT NULL COMMENT '作者',
  `category` varchar(16) NOT NULL COMMENT '类别',
  `second_category` varchar(16) NOT NULL COMMENT '二级类别',
  `recommen_number` int(16) NOT NULL DEFAULT '0' COMMENT '推荐数',
  `word_number` int(16) NOT NULL DEFAULT '0' COMMENT '总字数',
  `state` enum('1','0') NOT NULL DEFAULT '0' COMMENT '状态',
  `description` varchar(64) NOT NULL COMMENT '描述',
  PRIMARY KEY (`book_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------

-- ----------------------------
-- Table structure for `readers`
-- ----------------------------
DROP TABLE IF EXISTS `readers`;
CREATE TABLE `readers` (
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `usernumber` varchar(32) NOT NULL COMMENT '用户编号',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `nickname` varchar(32) NOT NULL COMMENT '昵称',
  `grade` tinyint(1) NOT NULL DEFAULT '0' COMMENT '级别',
  `recommendTicket` int(8) NOT NULL DEFAULT '0' COMMENT '推荐票数',
  `integral` int(8) NOT NULL DEFAULT '0' COMMENT '积分',
  PRIMARY KEY (`usernumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of readers
-- ----------------------------
