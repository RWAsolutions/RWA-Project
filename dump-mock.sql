-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: rwa_merlin
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `rwa_merlin`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `rwa_merlin` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `rwa_merlin`;

--
-- Table structure for table `City`
--

DROP TABLE IF EXISTS `City`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `City` (
  `postNumber` int NOT NULL,
  `cityName` text NOT NULL,
  PRIMARY KEY (`postNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `City`
--

LOCK TABLES `City` WRITE;
/*!40000 ALTER TABLE `City` DISABLE KEYS */;
INSERT INTO `City` VALUES (10000,'Zagreb'),(20000,'Dubrovnik'),(21000,'Split'),(23000,'Zadar'),(31000,'Osijek'),(51000,'Rijeka');
/*!40000 ALTER TABLE `City` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Course` (
  `courseID` int NOT NULL AUTO_INCREMENT,
  `courseName` varchar(100) NOT NULL,
  `ECTS` int NOT NULL,
  `description` text,
  `semesterID` int DEFAULT NULL,
  PRIMARY KEY (`courseID`),
  KEY `semesterID` (`semesterID`),
  CONSTRAINT `Course_ibfk_1` FOREIGN KEY (`semesterID`) REFERENCES `Semester` (`semesterID`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (151,'Microeconomics',6,'Introduction to microeconomic theory and its applications.',1547),(152,'Macroeconomics',6,'Introduction to macroeconomic theory and its applications.',1547),(153,'Econometrics',6,'Introduction to basic econometric methods.',1547),(154,'International Economics',6,'Introduction to international trade and finance.',1547),(155,'Development Economics',6,'Introduction to theories and policies of economic development.',1548),(156,'Strategic Management',6,'Introduction to strategic management concepts and techniques.',1548),(157,'Leadership',6,'Introduction to leadership theories and practices.',1548),(158,'Organizational Behavior',6,'Understanding human behavior in organizations.',1548),(159,'Operations Management',6,'Introduction to operations management concepts and techniques.',1548),(160,'Project Management',6,'Introduction to project management principles and methodologies.',1549),(161,'Tourism Economics',6,'Introduction to economic principles in the tourism industry.',1549),(162,'Tourism Marketing',6,'Introduction to marketing strategies in the tourism sector.',1549),(163,'Tourism Management',6,'Overview of management principles in the tourism industry.',1549),(164,'Cultural Tourism',6,'Understanding the cultural aspects of tourism.',1549),(165,'Sustainable Tourism',6,'Exploring sustainable practices in the tourism sector.',1550),(166,'Introduction to Education',6,'Overview of the field of education.',1550),(167,'Educational Psychology',6,'Understanding psychological principles in education.',1550),(168,'Curriculum Design',6,'Introduction to curriculum development and design.',1550),(169,'Teaching Methods',6,'Exploring various teaching methodologies.',1550),(170,'Classroom Management',6,'Strategies for managing classroom environments.',1551),(171,'Introduction to Preschool Education',6,'Overview of preschool education principles.',1551),(172,'Child Development',6,'Understanding the stages of child development.',1551),(173,'Early Childhood Curriculum',6,'Designing curriculum for early childhood education.',1551),(174,'Play-based Learning',6,'Exploring the importance of play in early childhood.',1551),(175,'Assessment in Preschool',6,'Methods of assessing young children\'s learning.',1552),(176,'Introduction to Special Education',6,'Overview of special education principles.',1552),(177,'Inclusive Education',6,'Understanding inclusive practices in education.',1552),(178,'Individualized Education Plans',6,'Developing individualized plans for students with special needs.',1552),(179,'Behavior Management',6,'Strategies for managing behavior in special education settings.',1552),(180,'Assistive Technology',6,'Exploring technology to support students with disabilities.',1553),(181,'Tourism Economics',6,'Introduction to economic principles in the tourism industry.',1553),(182,'Tourism Marketing',6,'Introduction to marketing strategies in the tourism sector.',1553),(183,'Tourism Management',6,'Overview of management principles in the tourism industry.',1553),(184,'Cultural Tourism',6,'Understanding the cultural aspects of tourism.',1553),(185,'Sustainable Tourism',6,'Exploring sustainable practices in the tourism sector.',1554),(186,'Introduction to Communication Sciences',6,'Overview of communication theories and models.',1554),(187,'Media Studies',6,'Exploring various forms of media and their impact.',1554),(188,'Intercultural Communication',6,'Understanding communication across cultures.',1554),(189,'Public Relations',6,'Introduction to principles and practices of public relations.',1554),(190,'Digital Communication',6,'Exploring communication in the digital age.',1555),(191,'Introduction to Cultural Studies',6,'Overview of cultural theories and approaches.',1555),(192,'Popular Culture',6,'Exploring popular culture phenomena.',1555),(193,'Globalization and Culture',6,'Understanding the impact of globalization on culture.',1555),(194,'Cultural Diversity',6,'Exploring diversity in cultural expressions.',1555),(195,'Cultural Identity',6,'Understanding the concept of cultural identity.',1556),(196,'Introduction to English Literature',6,'Overview of English literary periods and genres.',1556),(197,'Shakespeare Studies',6,'Exploring the works of William Shakespeare.',1556),(198,'American Literature',6,'Exploring literature from the United States.',1556),(199,'British Literature',6,'Exploring literature from the United Kingdom.',1556),(200,'Literary Theory',6,'Introduction to critical approaches to literature.',1557),(201,'Translation Theory',6,'Introduction to theories of translation.',1557),(202,'Technical Translation',6,'Principles and practices of technical translation.',1557),(203,'Literary Translation',6,'Exploring translation in literary contexts.',1557),(204,'Legal Translation',6,'Introduction to translation in legal contexts.',1557),(205,'Audiovisual Translation',6,'Translation in audiovisual media.',1558),(206,'English for Business',6,'English language skills for business communication.',1558),(207,'English for Tourism',6,'English language skills for tourism contexts.',1558),(208,'English for Law',6,'English language skills for legal contexts.',1558),(209,'English for Medicine',6,'English language skills for medical contexts.',1558),(210,'English for Academic Purposes',6,'English language skills for academic settings.',1559),(211,'Introduction to Nautical Studies',6,'Overview of nautical science principles.',1559),(212,'Maritime Navigation',6,'Exploring principles of maritime navigation.',1559),(213,'Ship Construction',6,'Understanding the construction of ships.',1559),(214,'Marine Safety',6,'Practices for ensuring safety at sea.',1559),(215,'Maritime Law',6,'Introduction to legal aspects of maritime operations.',1560),(216,'Introduction to Maritime Engineering',6,'Overview of principles of maritime engineering.',1560),(217,'Ship Design',6,'Exploring the design of ships and maritime structures.',1560),(218,'Marine Propulsion',6,'Principles of marine propulsion systems.',1560),(219,'Naval Architecture',6,'Understanding the architecture of naval vessels.',1560),(220,'Ocean Engineering',6,'Engineering solutions for ocean environments.',1561),(221,'Introduction to Marine Transport',6,'Overview of marine transportation systems.',1561),(222,'Maritime Logistics',6,'Principles of logistics in maritime operations.',1561),(223,'Port Management',6,'Management of port facilities and operations.',1561),(224,'Cargo Handling',6,'Techniques for handling cargo in marine transport.',1561),(225,'Maritime Regulations',6,'Understanding regulatory frameworks in maritime transport.',1562);
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Faculty`
--

DROP TABLE IF EXISTS `Faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Faculty` (
  `facultyID` int NOT NULL AUTO_INCREMENT,
  `facultyName` varchar(100) NOT NULL,
  `street` varchar(100) NOT NULL,
  `streetNumber` varchar(10) NOT NULL,
  `contactNumber` varchar(20) DEFAULT NULL,
  `contactMail` varchar(100) DEFAULT NULL,
  `cityID` int DEFAULT NULL,
  PRIMARY KEY (`facultyID`),
  KEY `cityID` (`cityID`),
  CONSTRAINT `Faculty_ibfk_1` FOREIGN KEY (`cityID`) REFERENCES `City` (`postNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Faculty`
--

LOCK TABLES `Faculty` WRITE;
/*!40000 ALTER TABLE `Faculty` DISABLE KEYS */;
INSERT INTO `Faculty` VALUES (1,'Faculty of Electrical Engineering and Computing','Unska','3','012345678','fer@unizg.hr',10000),(2,'Faculty of Mechanical Engineering and Naval Architecture','Ivana Lucica','5','012345679','fsb@unizg.hr',10000),(3,'Faculty of Economics and Business','Trg J. F. Kennedyja','6','012345680','efzg@unizg.hr',10000),(4,'Faculty of Law','Trg Republike Hrvatske','14','012345681','pravo@unizg.hr',10000),(5,'Faculty of Humanities and Social Sciences','Ivana Lucica','3','012345682','ffzg@unizg.hr',10000),(6,'Faculty of Economics','Cvite Fiskovica','5','021345678','efst@unist.hr',21000),(7,'Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture','Rudjera Boskovica','32','021345679','fesb@unist.hr',21000),(8,'Faculty of Law','Domovinskog rata','8','021345680','pravst@unist.hr',21000),(9,'Faculty of Humanities and Social Sciences','Poljicka cesta','35','021345681','ffst@unist.hr',21000),(10,'Faculty of Medicine','Soltanska','2','021345682','mefst@unist.hr',21000),(11,'Faculty of Engineering','Vukovarska','58','051345678','riteh@uniri.hr',51000),(12,'Faculty of Medicine','Brace Branchetta','20','051345679','medri@uniri.hr',51000),(13,'Faculty of Law','Hahlic','6','051345680','pravri@uniri.hr',51000),(14,'Faculty of Humanities and Social Sciences','Sveucilisna avenija','4','051345681','ffri@uniri.hr',51000),(15,'Faculty of Economics and Business','Ivana Filipovica','4','051345682','efri@uniri.hr',51000),(16,'Faculty of Electrical Engineering, Computer Science and Information Technology','Kneza Trpimira','2b','031345678','ferit@unios.hr',31000),(17,'Faculty of Agriculture','Vladimira Preloga','1','031345679','fazos@unios.hr',31000),(18,'Faculty of Law','Stjepana Radica','13','031345680','pravos@unios.hr',31000),(19,'Faculty of Economics','Gunduliceva','10','031345681','efos@unios.hr',31000),(20,'Faculty of Humanities and Social Sciences','Lorenza Jagera','9','031345682','ffos@unios.hr',31000),(21,'Department of Economics','Mihovila Pavlinovica','1','023345678','ode@unizd.hr',23000),(22,'Department of Teacher Education Studies','Obala kralja Petra Kresimira IV','2','023345679','dp@unizd.hr',23000),(23,'Department of Tourism and Communication Sciences','Franje Tudmana','24i','023345680','dtc@unizd.hr',23000),(24,'Department of English','Ulica dr. Franje Tudmana','24i','023345681','eng@unizd.hr',23000),(25,'Department of Maritime Studies','Mihovila Pavlinovica','1','023345682','dm@unizd.hr',23000),(26,'Department of Electrical Engineering and Computing','Cira Carica','4','020345678','deec@unidu.hr',20000),(27,'Department of Aquaculture','Cira Carica','4','020345679','da@unidu.hr',20000),(28,'Department of Economics and Business Economics','Lapadska obala','7','020345680','debe@unidu.hr',20000),(29,'Department of Maritime Studies','Cira Carica','4','020345681','dms@unidu.hr',20000),(30,'Department of Art and Restoration','Branitelja Dubrovnika','41','020345682','dar@unidu.hr',20000);
/*!40000 ALTER TABLE `Faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Notification`
--

DROP TABLE IF EXISTS `Notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notification` (
  `notificationID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `courseID` int DEFAULT NULL,
  PRIMARY KEY (`notificationID`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `Notification_ibfk_1` FOREIGN KEY (`courseID`) REFERENCES `Course` (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notification`
--

LOCK TABLES `Notification` WRITE;
/*!40000 ALTER TABLE `Notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `Notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profesor`
--

DROP TABLE IF EXISTS `Profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profesor` (
  `profesorID` int NOT NULL AUTO_INCREMENT,
  `profesorName` varchar(100) NOT NULL,
  `profesorSurname` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `street` varchar(100) NOT NULL,
  `streetNumber` varchar(10) NOT NULL,
  `cityID` int DEFAULT NULL,
  PRIMARY KEY (`profesorID`),
  KEY `cityID` (`cityID`),
  CONSTRAINT `Profesor_ibfk_1` FOREIGN KEY (`cityID`) REFERENCES `City` (`postNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesor`
--

LOCK TABLES `Profesor` WRITE;
/*!40000 ALTER TABLE `Profesor` DISABLE KEYS */;
INSERT INTO `Profesor` VALUES (1,'Ante','Ivanovic','Doc. dr. sc.','1978-01-01','Male','Ulica Mira','10',21000),(2,'Ante','Petrovic','mag. sc.','1980-02-14','Female','Trg Bana Jelacica','5',23000),(3,'Ante','Juranic','mag. sc.','1979-03-05','Male','Selska cesta','22',31000),(4,'Marko','Sokol','mag. sc.','1981-04-21','Female','Obala Kneza Trpimira','1',10000),(5,'Marko','Horvat','mag. sc.','1977-05-12','Male','Avenija Dubrovnika','7',23000),(6,'Stipe','Jaksic','mag. sc.','1982-06-03','Female','Ulica Gracisa','15',31000),(7,'Ante','Klaric','mag. sc.','1978-07-19','Male','Setaliste Petra Kresimira IV','9',10000),(8,'Dora','Grgic','mag. sc.','1980-08-28','Female','Ulica Horvate hrvatske','3',20000),(9,'Josip','Horvat','mag. sc.','1979-09-16','Male','Poljana kralja Tomislava','11',23000),(10,'Katarina','Markovic','mag. sc.','1981-10-07','Female','Selska cesta','42',20000),(11,'Matija','Barisic','mag. sc.','1982-11-25','Male','Ulica kralja Tomislava','24',10000),(12,'Lana','Lovric','mag. sc.','1978-12-14','Female','Trg Nikole Šubića Zrinskog','8',20000),(13,'Tomislav','Hasnek','mag. sc.','1980-01-04','Male','Ulica Jurja Matijevića','17',10000),(14,'Nikolina','Polic','mag. sc.','1981-02-13','Female','Selska cesta','31',20000),(15,'Hrvoje','Simonovic','mag. sc.','1979-03-02','Male','Ulica kneza Domagoja','6',31000),(16,'Ema','Vukic','mag. sc.','1982-04-11','Female','Ulica kraljice Jelene','19',51000),(17,'Tin','Reprodução','mag. sc.','1978-05-30','Male','Ulica grada Vukovara','2',20000),(18,'Mia','Cvjetkovic','Doc. dr. sc.','1980-06-19','Female','Trg bana Jelačića','12',31000),(19,'Filip','Bozic','Doc. dr. sc.','1979-07-08','Male','Ulica kneza Mislava','21',10000),(20,'Sara','Horvat','Doc. dr. sc.','1981-08-27','Female','Ulica kralja Tomislava','55',20000),(21,'Jure','Pavic','Doc. dr. sc.','2003-09-23','Male','Ulica Bijeli put','37',20000),(22,'Ivana','Brkic','Doc. dr. sc.','1982-10-12','Female','Setaliste kralja Tomislava','14',51000),(23,'Lovro','Boskovic','Doc. dr. sc.','1980-11-01','Male','Ulica kneza Trpimira','88',31000),(24,'Lucija','Kozul','Doc. dr. sc.','1981-12-20','Female','Avenija Dubrovnik','51',23000),(25,'Marko','Sesek','Doc. dr. sc.','1979-01-29','Male','Ulica grada Vukovara','13',31000),(26,'Tea','Jakic','Doc. dr. sc.','1983-02-18','Female','Trg bana Jelačića','27',20000),(27,'Ante','Martinic','Doc. dr. sc.','1982-03-09','Male','Ulica Horvate hrvatske','48',23000),(28,'Nikolina','Jurkovic','Doc. dr. sc.','1980-04-27','Female','Ulica Jurja Matijevića','34',51000),(29,'Ivan','Feric','Doc. dr. sc.','1979-05-16','Male','Ulica kraljice Jelene','77',31000),(30,'Lana','Bebic','Doc. dr. sc.','1983-06-05','Female','Ulica kneza Domagoja','90',31000),(31,'Matija','Blazevic','Doc. dr. sc.','1982-07-24','Male','Ulica Bijeli put','2',21000),(32,'Mia','Klaric','Doc. dr. sc.','1980-08-13','Female','Setaliste kralja Tomislava','64',21000),(33,'Tomislav','Vukic','Doc. dr. sc.','1979-09-02','Male','Ulica kneza Trpimira','12',51000),(34,'Nikolina','Grgic','Doc. dr. sc.','1981-10-21','Female','Avenija Dubrovnik','82',51000),(35,'Hrvoje','Lovric','Doc. dr. sc.','1980-11-30','Male','Ulica grada Vukovara','57',31000),(36,'Ema','Barisic','Doc. dr. sc.','1983-01-19','Female','Trg bana Jelačića','45',23000),(37,'Tin','Horvat','Doc. dr. sc.','1982-02-08','Male','Ulica Horvate hrvatske','10',51000),(38,'Sara','Hasnek','Doc. dr. sc.','1980-03-27','Female','Ulica Jurja Matijevića','61',31000);
/*!40000 ALTER TABLE `Profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Semester`
--

DROP TABLE IF EXISTS `Semester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Semester` (
  `semesterID` int NOT NULL AUTO_INCREMENT,
  `semesterOrdinalNumber` int NOT NULL,
  `studyID` int DEFAULT NULL,
  PRIMARY KEY (`semesterID`),
  KEY `studyID` (`studyID`),
  CONSTRAINT `Semester_ibfk_1` FOREIGN KEY (`studyID`) REFERENCES `Study` (`studyID`)
) ENGINE=InnoDB AUTO_INCREMENT=1811 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Semester`
--

LOCK TABLES `Semester` WRITE;
/*!40000 ALTER TABLE `Semester` DISABLE KEYS */;
INSERT INTO `Semester` VALUES (991,1,1),(992,2,1),(993,3,1),(994,4,1),(995,5,1),(996,6,1),(997,7,1),(998,8,1),(999,9,1),(1000,10,1),(1001,1,2),(1002,2,2),(1003,3,2),(1004,4,2),(1005,5,2),(1006,6,2),(1007,7,2),(1008,8,2),(1009,9,2),(1010,10,2),(1011,1,3),(1012,2,3),(1013,3,3),(1014,4,3),(1015,5,3),(1016,6,3),(1017,7,3),(1018,8,3),(1019,9,3),(1020,10,3),(1021,1,4),(1022,2,4),(1023,3,4),(1024,4,4),(1025,5,4),(1026,6,4),(1027,7,4),(1028,8,4),(1029,9,4),(1030,10,4),(1031,1,5),(1032,2,5),(1033,3,5),(1034,4,5),(1035,5,5),(1036,6,5),(1037,7,5),(1038,8,5),(1039,9,5),(1040,10,5),(1041,1,6),(1042,2,6),(1043,3,6),(1044,4,6),(1045,5,6),(1046,6,6),(1047,7,6),(1048,8,6),(1049,9,6),(1050,10,6),(1051,1,7),(1052,2,7),(1053,3,7),(1054,4,7),(1055,5,7),(1056,6,7),(1057,7,7),(1058,8,7),(1059,9,7),(1060,10,7),(1061,1,8),(1062,2,8),(1063,3,8),(1064,4,8),(1065,5,8),(1066,6,8),(1067,7,8),(1068,8,8),(1069,9,8),(1070,10,8),(1071,1,9),(1072,2,9),(1073,3,9),(1074,4,9),(1075,5,9),(1076,6,9),(1077,7,9),(1078,8,9),(1079,9,9),(1080,10,9),(1081,1,10),(1082,2,10),(1083,3,10),(1084,4,10),(1085,5,10),(1086,6,10),(1087,7,10),(1088,8,10),(1089,9,10),(1090,10,10),(1091,1,11),(1092,2,11),(1093,3,11),(1094,4,11),(1095,5,11),(1096,6,11),(1097,1,12),(1098,2,12),(1099,3,12),(1100,4,12),(1101,5,12),(1102,6,12),(1103,1,13),(1104,2,13),(1105,3,13),(1106,4,13),(1107,5,13),(1108,6,13),(1109,7,13),(1110,8,13),(1111,9,13),(1112,10,13),(1113,1,14),(1114,2,14),(1115,3,14),(1116,4,14),(1117,5,14),(1118,6,14),(1119,7,14),(1120,8,14),(1121,9,14),(1122,10,14),(1123,1,15),(1124,2,15),(1125,3,15),(1126,4,15),(1127,5,15),(1128,6,15),(1129,7,15),(1130,8,15),(1131,9,15),(1132,10,15),(1133,1,16),(1134,2,16),(1135,3,16),(1136,4,16),(1137,5,16),(1138,6,16),(1139,7,16),(1140,8,16),(1141,9,16),(1142,10,16),(1143,1,17),(1144,2,17),(1145,3,17),(1146,4,17),(1147,5,17),(1148,6,17),(1149,7,17),(1150,8,17),(1151,9,17),(1152,10,17),(1153,1,18),(1154,2,18),(1155,3,18),(1156,4,18),(1157,5,18),(1158,6,18),(1159,7,18),(1160,8,18),(1161,9,18),(1162,10,18),(1163,1,19),(1164,2,19),(1165,3,19),(1166,4,19),(1167,5,19),(1168,6,19),(1169,7,19),(1170,8,19),(1171,9,19),(1172,10,19),(1173,1,20),(1174,2,20),(1175,3,20),(1176,4,20),(1177,5,20),(1178,6,20),(1179,7,20),(1180,8,20),(1181,9,20),(1182,10,20),(1183,1,21),(1184,2,21),(1185,3,21),(1186,4,21),(1187,5,21),(1188,6,21),(1189,7,21),(1190,8,21),(1191,9,21),(1192,10,21),(1193,1,22),(1194,2,22),(1195,3,22),(1196,4,22),(1197,5,22),(1198,6,22),(1199,7,22),(1200,8,22),(1201,9,22),(1202,10,22),(1203,1,23),(1204,2,23),(1205,3,23),(1206,4,23),(1207,5,23),(1208,6,23),(1209,1,24),(1210,2,24),(1211,3,24),(1212,4,24),(1213,5,24),(1214,6,24),(1215,1,25),(1216,2,25),(1217,3,25),(1218,4,25),(1219,5,25),(1220,6,25),(1221,7,25),(1222,8,25),(1223,9,25),(1224,10,25),(1225,1,26),(1226,2,26),(1227,3,26),(1228,4,26),(1229,5,26),(1230,6,26),(1231,7,26),(1232,8,26),(1233,9,26),(1234,10,26),(1235,1,27),(1236,2,27),(1237,3,27),(1238,4,27),(1239,5,27),(1240,6,27),(1241,7,27),(1242,8,27),(1243,9,27),(1244,10,27),(1245,1,28),(1246,2,28),(1247,3,28),(1248,4,28),(1249,5,28),(1250,6,28),(1251,7,28),(1252,8,28),(1253,9,28),(1254,10,28),(1255,11,28),(1256,12,28),(1257,1,29),(1258,2,29),(1259,3,29),(1260,4,29),(1261,5,29),(1262,6,29),(1263,7,29),(1264,8,29),(1265,9,29),(1266,10,29),(1267,11,29),(1268,12,29),(1269,1,30),(1270,2,30),(1271,3,30),(1272,4,30),(1273,5,30),(1274,6,30),(1275,7,30),(1276,8,30),(1277,9,30),(1278,10,30),(1279,1,31),(1280,2,31),(1281,3,31),(1282,4,31),(1283,5,31),(1284,6,31),(1285,7,31),(1286,8,31),(1287,9,31),(1288,10,31),(1289,1,32),(1290,2,32),(1291,3,32),(1292,4,32),(1293,5,32),(1294,6,32),(1295,7,32),(1296,8,32),(1297,9,32),(1298,10,32),(1299,1,33),(1300,2,33),(1301,3,33),(1302,4,33),(1303,5,33),(1304,6,33),(1305,7,33),(1306,8,33),(1307,9,33),(1308,10,33),(1309,1,34),(1310,2,34),(1311,3,34),(1312,4,34),(1313,5,34),(1314,6,34),(1315,7,34),(1316,8,34),(1317,9,34),(1318,10,34),(1319,11,34),(1320,12,34),(1321,1,35),(1322,2,35),(1323,3,35),(1324,4,35),(1325,5,35),(1326,6,35),(1327,7,35),(1328,8,35),(1329,9,35),(1330,10,35),(1331,11,35),(1332,12,35),(1333,1,36),(1334,2,36),(1335,3,36),(1336,4,36),(1337,5,36),(1338,6,36),(1339,7,36),(1340,8,36),(1341,9,36),(1342,10,36),(1343,1,37),(1344,2,37),(1345,3,37),(1346,4,37),(1347,5,37),(1348,6,37),(1349,7,37),(1350,8,37),(1351,9,37),(1352,10,37),(1353,1,38),(1354,2,38),(1355,3,38),(1356,4,38),(1357,5,38),(1358,6,38),(1359,1,39),(1360,2,39),(1361,3,39),(1362,4,39),(1363,5,39),(1364,6,39),(1365,1,40),(1366,2,40),(1367,3,40),(1368,4,40),(1369,5,40),(1370,6,40),(1371,7,40),(1372,8,40),(1373,9,40),(1374,10,40),(1375,1,41),(1376,2,41),(1377,3,41),(1378,4,41),(1379,5,41),(1380,6,41),(1381,7,41),(1382,8,41),(1383,9,41),(1384,10,41),(1385,1,42),(1386,2,42),(1387,3,42),(1388,4,42),(1389,5,42),(1390,6,42),(1391,7,42),(1392,8,42),(1393,9,42),(1394,10,42),(1395,1,43),(1396,2,43),(1397,3,43),(1398,4,43),(1399,5,43),(1400,6,43),(1401,7,43),(1402,8,43),(1403,9,43),(1404,10,43),(1405,1,44),(1406,2,44),(1407,3,44),(1408,4,44),(1409,5,44),(1410,6,44),(1411,7,44),(1412,8,44),(1413,9,44),(1414,10,44),(1415,1,45),(1416,2,45),(1417,3,45),(1418,4,45),(1419,5,45),(1420,6,45),(1421,7,45),(1422,8,45),(1423,9,45),(1424,10,45),(1425,1,46),(1426,2,46),(1427,3,46),(1428,4,46),(1429,5,46),(1430,6,46),(1431,7,46),(1432,8,46),(1433,9,46),(1434,10,46),(1435,1,47),(1436,2,47),(1437,3,47),(1438,4,47),(1439,5,47),(1440,6,47),(1441,7,47),(1442,8,47),(1443,9,47),(1444,10,47),(1445,1,48),(1446,2,48),(1447,3,48),(1448,4,48),(1449,5,48),(1450,6,48),(1451,7,48),(1452,8,48),(1453,9,48),(1454,10,48),(1455,1,49),(1456,2,49),(1457,3,49),(1458,4,49),(1459,5,49),(1460,6,49),(1461,7,49),(1462,8,49),(1463,9,49),(1464,10,49),(1465,1,50),(1466,2,50),(1467,3,50),(1468,4,50),(1469,5,50),(1470,6,50),(1471,7,50),(1472,8,50),(1473,9,50),(1474,10,50),(1475,1,51),(1476,2,51),(1477,3,51),(1478,4,51),(1479,5,51),(1480,6,51),(1481,7,51),(1482,8,51),(1483,9,51),(1484,10,51),(1485,1,52),(1486,2,52),(1487,3,52),(1488,4,52),(1489,5,52),(1490,6,52),(1491,7,52),(1492,8,52),(1493,9,52),(1494,10,52),(1495,1,53),(1496,2,53),(1497,3,53),(1498,4,53),(1499,5,53),(1500,6,53),(1501,1,54),(1502,2,54),(1503,3,54),(1504,4,54),(1505,5,54),(1506,6,54),(1507,1,55),(1508,2,55),(1509,3,55),(1510,4,55),(1511,5,55),(1512,6,55),(1513,7,55),(1514,8,55),(1515,9,55),(1516,10,55),(1517,1,56),(1518,2,56),(1519,3,56),(1520,4,56),(1521,5,56),(1522,6,56),(1523,7,56),(1524,8,56),(1525,9,56),(1526,10,56),(1527,1,57),(1528,2,57),(1529,3,57),(1530,4,57),(1531,5,57),(1532,6,57),(1533,7,57),(1534,8,57),(1535,9,57),(1536,10,57),(1537,1,58),(1538,2,58),(1539,3,58),(1540,4,58),(1541,5,58),(1542,6,58),(1543,7,58),(1544,8,58),(1545,9,58),(1546,10,58),(1547,1,61),(1548,2,61),(1549,3,61),(1550,4,61),(1551,5,61),(1552,6,61),(1553,7,61),(1554,8,61),(1555,9,61),(1556,10,61),(1557,1,62),(1558,2,62),(1559,3,62),(1560,4,62),(1561,5,62),(1562,6,62),(1563,7,62),(1564,8,62),(1565,9,62),(1566,10,62),(1567,1,63),(1568,2,63),(1569,3,63),(1570,4,63),(1571,5,63),(1572,6,63),(1573,7,63),(1574,8,63),(1575,9,63),(1576,10,63),(1577,1,64),(1578,2,64),(1579,3,64),(1580,4,64),(1581,5,64),(1582,6,64),(1583,7,64),(1584,8,64),(1585,9,64),(1586,10,64),(1587,1,65),(1588,2,65),(1589,3,65),(1590,4,65),(1591,5,65),(1592,6,65),(1593,1,66),(1594,2,66),(1595,3,66),(1596,4,66),(1597,5,66),(1598,6,66),(1599,1,67),(1600,2,67),(1601,3,67),(1602,4,67),(1603,5,67),(1604,6,67),(1605,7,67),(1606,8,67),(1607,9,67),(1608,10,67),(1609,1,68),(1610,2,68),(1611,3,68),(1612,4,68),(1613,5,68),(1614,6,68),(1615,7,68),(1616,8,68),(1617,9,68),(1618,10,68),(1619,1,69),(1620,2,69),(1621,3,69),(1622,4,69),(1623,5,69),(1624,6,69),(1625,7,69),(1626,8,69),(1627,9,69),(1628,10,69),(1629,1,70),(1630,2,70),(1631,3,70),(1632,4,70),(1633,5,70),(1634,6,70),(1635,7,70),(1636,8,70),(1637,9,70),(1638,10,70),(1639,1,71),(1640,2,71),(1641,3,71),(1642,4,71),(1643,5,71),(1644,6,71),(1645,7,71),(1646,8,71),(1647,9,71),(1648,10,71),(1649,1,72),(1650,2,72),(1651,3,72),(1652,4,72),(1653,5,72),(1654,6,72),(1655,1,73),(1656,2,73),(1657,3,73),(1658,4,73),(1659,5,73),(1660,6,73),(1661,1,74),(1662,2,74),(1663,3,74),(1664,4,74),(1665,5,74),(1666,6,74),(1667,1,75),(1668,2,75),(1669,3,75),(1670,4,75),(1671,5,75),(1672,6,75),(1673,1,76),(1674,2,76),(1675,3,76),(1676,4,76),(1677,5,76),(1678,6,76),(1679,7,76),(1680,8,76),(1681,9,76),(1682,10,76),(1683,1,77),(1684,2,77),(1685,3,77),(1686,4,77),(1687,5,77),(1688,6,77),(1689,7,77),(1690,8,77),(1691,9,77),(1692,10,77),(1693,1,78),(1694,2,78),(1695,3,78),(1696,4,78),(1697,5,78),(1698,6,78),(1699,7,78),(1700,8,78),(1701,9,78),(1702,10,78),(1703,1,79),(1704,2,79),(1705,3,79),(1706,4,79),(1707,5,79),(1708,6,79),(1709,7,79),(1710,8,79),(1711,9,79),(1712,10,79),(1713,1,80),(1714,2,80),(1715,3,80),(1716,4,80),(1717,5,80),(1718,6,80),(1719,7,80),(1720,8,80),(1721,9,80),(1722,10,80),(1723,1,81),(1724,2,81),(1725,3,81),(1726,4,81),(1727,5,81),(1728,6,81),(1729,7,81),(1730,8,81),(1731,9,81),(1732,10,81),(1733,1,82),(1734,2,82),(1735,3,82),(1736,4,82),(1737,5,82),(1738,6,82),(1739,7,82),(1740,8,82),(1741,9,82),(1742,10,82),(1743,1,83),(1744,2,83),(1745,3,83),(1746,4,83),(1747,5,83),(1748,6,83),(1749,7,83),(1750,8,83),(1751,9,83),(1752,10,83),(1753,1,84),(1754,2,84),(1755,3,84),(1756,4,84),(1757,5,84),(1758,6,84),(1759,7,84),(1760,8,84),(1761,9,84),(1762,10,84),(1763,1,85),(1764,2,85),(1765,3,85),(1766,4,85),(1767,5,85),(1768,6,85),(1769,1,86),(1770,2,86),(1771,3,86),(1772,4,86),(1773,5,86),(1774,6,86),(1775,1,87),(1776,2,87),(1777,3,87),(1778,4,87),(1779,5,87),(1780,6,87),(1781,1,88),(1782,2,88),(1783,3,88),(1784,4,88),(1785,5,88),(1786,6,88),(1787,7,88),(1788,8,88),(1789,9,88),(1790,10,88),(1791,1,89),(1792,2,89),(1793,3,89),(1794,4,89),(1795,5,89),(1796,6,89),(1797,7,89),(1798,8,89),(1799,9,89),(1800,10,89),(1801,1,90),(1802,2,90),(1803,3,90),(1804,4,90),(1805,5,90),(1806,6,90),(1807,7,90),(1808,8,90),(1809,9,90),(1810,10,90);
/*!40000 ALTER TABLE `Semester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
  `studentID` int NOT NULL AUTO_INCREMENT,
  `studentName` varchar(100) NOT NULL,
  `studentSurname` varchar(100) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `street` varchar(100) NOT NULL,
  `streetNumber` varchar(10) NOT NULL,
  `cityID` int DEFAULT NULL,
  PRIMARY KEY (`studentID`),
  KEY `cityID` (`cityID`),
  CONSTRAINT `Student_ibfk_1` FOREIGN KEY (`cityID`) REFERENCES `City` (`postNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=266 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES (180,'Marko','Ivanovic','1998-01-01','Male','Ulica Mira','10',23000),(181,'Ana','Petrovic','2000-02-14','Female','Trg Bana Jelacica','5',23000),(182,'Ivan','Juranic','1999-03-05','Male','Selska cesta','22',21000),(183,'Marija','Sokol','2001-04-21','Female','Obala Kneza Trpimira','1',21000),(184,'Luka','Matic','1997-05-12','Male','Avenija Dubrovnika','7',23000),(185,'Nina','Kovacevic','2002-06-03','Female','Ulica Gracisa','15',31000),(186,'Ante','Klaric','1998-07-19','Male','Setaliste Petra Kresimira IV','9',10000),(187,'Dora','Grgic','2000-08-28','Female','Ulica Matice hrvatske','3',20000),(188,'Josip','Horvat','1999-09-16','Male','Poljana kralja Tomislava','11',23000),(189,'Katarina','Markovic','2001-10-07','Female','Selska cesta','42',20000),(190,'Matija','Barisic','2002-11-25','Male','Ulica kralja Tomislava','24',10000),(191,'Lana','Lovric','1998-12-14','Female','Trg Nikole Šubića Zrinskog','8',20000),(192,'Tomislav','Babic','2000-01-04','Male','Ulica Jurja Matijevića','17',21000),(193,'Nikolina','Polic','2001-02-13','Female','Selska cesta','31',20000),(194,'Hrvoje','Simonovic','1999-03-02','Male','Ulica kneza Domagoja','6',31000),(195,'Ema','Vukic','2002-04-11','Female','Ulica kraljice Jelene','19',51000),(196,'Tin','Reprodução','1998-05-30','Male','Ulica grada Vukovara','2',20000),(197,'Mia','Cvjetkovic','2000-06-19','Female','Trg bana Jelačića','12',31000),(198,'Filip','Bozic','1999-07-08','Male','Ulica kneza Mislava','21',10000),(199,'Sara','Matic','2001-08-27','Female','Ulica kralja Tomislava','55',20000),(200,'Jure','Pavic','2003-09-23','Male','Ulica Bijeli put','37',20000),(201,'Ivana','Brkic','2002-10-12','Female','Setaliste kralja Tomislava','14',51000),(202,'Lovro','Boskovic','2000-11-01','Male','Ulica kneza Trpimira','88',10000),(203,'Lucija','Kozul','2001-12-20','Female','Avenija Dubrovnik','51',23000),(204,'Marko','Sesek','1999-01-29','Male','Ulica grada Vukovara','13',31000),(205,'Tea','Jakic','2003-02-18','Female','Trg bana Jelačića','27',20000),(206,'Ante','Martinic','2002-03-09','Male','Ulica Matice hrvatske','48',23000),(207,'Nikolina','Jurkovic','2000-04-27','Female','Ulica Jurja Matijevića','34',51000),(208,'Ivan','Feric','1999-05-16','Male','Ulica kraljice Jelene','77',31000),(209,'Lana','Bebic','2003-06-05','Female','Ulica kneza Domagoja','90',31000),(210,'Matija','Blazevic','2002-07-24','Male','Ulica Bijeli put','2',21000),(211,'Mia','Klaric','2000-08-13','Female','Setaliste kralja Tomislava','64',21000),(212,'Tomislav','Vukic','1999-09-02','Male','Ulica kneza Trpimira','12',51000),(213,'Nikolina','Grgic','2001-10-21','Female','Avenija Dubrovnik','82',51000),(214,'Hrvoje','Lovric','2000-11-30','Male','Ulica grada Vukovara','57',10000),(215,'Ema','Barisic','2003-01-19','Female','Trg bana Jelačića','45',23000),(216,'Tin','Matic','2002-02-08','Male','Ulica Matice hrvatske','10',51000),(217,'Sara','Babic','2000-03-27','Female','Ulica Jurja Matijevića','61',31000),(218,'Filip','Simonovic','1999-04-15','Male','Ulica kraljice Jelene','39',10000),(219,'Jure','Cvjetkovic','2003-05-04','Male','Ulica kneza Domagoja','72',31000),(220,'Marko','Lovrekovic','2002-01-08','Male','Ulica kneza Mislava','23',23000),(221,'Ana','Pavic','1998-07-20','Female','Ulica Bijeli put','46',51000),(222,'Ivan','Klaric Jaksic','2000-02-23','Male','Setaliste kralja Tomislava','75',31000),(223,'Marija','Sokol Novak','2001-05-09','Female','Avenija Dubrovnik','93',20000),(224,'Josip','Horvat','1999-12-10','Male','Avenija Marina Držića','14',21000),(225,'Katarina','Markovic','2001-01-19','Female','Trg Nikole Šubića Zrinskog','49',31000),(226,'Marko','Stanic','2002-03-07','Male','Ulica grada Vukovara','4',23000),(227,'Ivana','Kristic','2000-04-16','Female','Trg bana Jelačića','63',21000),(228,'Lovro','Peric','1999-05-05','Male','Ulica Matice hrvatske','70',21000),(229,'Lucija','Vincekovic','2001-06-24','Female','Avenija Dubrovnik','8',20000),(230,'Ante','Kodzic','2000-07-13','Male','Ulica Jurja Matijevića','29',10000),(231,'Tea','Selec','2002-08-02','Female','Ulica Bijeli put','54',31000),(232,'Ivan','Milic','1999-09-21','Male','Setaliste kralja Tomislava','9',51000),(233,'Nikolina','Lukic','2001-10-30','Female','Ulica kneza Trpimira','36',10000),(234,'Hrvoje','Sesek','2000-11-19','Male','Avenija Marina Držića','1',51000),(235,'Ema','Kovacevic','2002-12-08','Female','Trg Nikole Šubića Zrinskog','43',21000),(236,'Tin','Matic','2001-01-27','Male','Ulica Bijeli put','67',21000),(237,'Mia','Babic','2000-02-16','Female','Setaliste Petra Kresimira IV','20',31000),(238,'Tomislav','Klaric','1999-03-05','Male','Ulica kneza Mislava','52',20000),(239,'Nikolina','Blazevic','2001-04-24','Female','Ulica grada Vukovara','79',51000),(240,'Hrvoje','Grgic','2000-05-13','Male','Trg bana Jelačića','3',21000),(241,'Ema','Lovric','2002-06-02','Female','Ulica Matice hrvatske','60',10000),(242,'Tin','Peric','2001-07-21','Male','Avenija Dubrovnik','18',10000),(243,'Sara','Vincekovic','2000-08-30','Female','Ulica Jurja Matijevića','47',20000),(244,'Filip','Kodzic','1999-09-19','Male','Ulica Bijeli put','84',23000),(245,'Jure','Selec','2002-10-08','Male','Setaliste kralja Tomislava','26',51000),(246,'Marko','Vukovic','2003-11-17','Male','Ulica kneza Domagoja','7',31000),(247,'Ivana','Brlic','2001-12-26','Female','Ulica kraljice Jelene','91',31000),(248,'Lovro','Martinic','2000-01-15','Male','Ulica Bijeli put','50',23000),(249,'Lucija','Feric','2002-02-03','Female','Setaliste Petra Kresimira IV','22',20000),(250,'Ante','Bebic','2001-03-22','Male','Ulica grada Vukovara','65',51000),(251,'Tea','Klaric','2003-04-11','Female','Trg bana Jelačića','87',23000),(252,'Ivan','Milic','2002-05-30','Male','Ulica Matice hrvatske','11',23000),(253,'Nikolina','Pavic','2000-06-19','Female','Avenija Dubrovnik','40',23000),(254,'Hrvoje','Boskovic','1999-07-08','Male','Ulica Jurja Matijevića','73',31000),(255,'Ema','Kozul','2003-08-27','Female','Ulica kneza Trpimira','5',23000),(256,'Tin','Sesek','2002-09-16','Male','Ulica kneza Mislava','80',51000),(257,'Mia','Jakic','2000-10-05','Female','Ulica Bijeli put','33',21000),(258,'Tomislav','Matic','1999-11-24','Male','Setaliste kralja Tomislava','68',31000),(259,'Nikolina','Babic','2001-12-13','Female','Ulica grada Vukovara','28',21000),(260,'Hrvoje','Klaric','2000-01-02','Male','Trg bana Jelačića','9',31000),(261,'Ema','Vukovic','2002-02-21','Female','Ulica Matice hrvatske','44',10000),(262,'Tin','Brlic','2001-03-10','Male','Avenija Dubrovnik','81',23000),(263,'Sara','Martinic','2000-04-29','Female','Ulica Jurja Matijevića','35',23000),(264,'Filip','Feric','1999-05-18','Male','Ulica Bijeli put','71',21000),(265,'Jure','Bebic','2003-06-07','Male','Setaliste Petra Kresimira IV','1',21000);
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Study`
--

DROP TABLE IF EXISTS `Study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Study` (
  `studyID` int NOT NULL AUTO_INCREMENT,
  `studyName` varchar(100) NOT NULL,
  `type` enum('strucni','sveucilisni') NOT NULL,
  `firstDegree` int DEFAULT NULL,
  `secondDegree` int DEFAULT NULL,
  `facultyID` int DEFAULT NULL,
  PRIMARY KEY (`studyID`),
  KEY `facultyID` (`facultyID`),
  CONSTRAINT `Study_ibfk_1` FOREIGN KEY (`facultyID`) REFERENCES `Faculty` (`facultyID`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Study`
--

LOCK TABLES `Study` WRITE;
/*!40000 ALTER TABLE `Study` DISABLE KEYS */;
INSERT INTO `Study` VALUES (1,'Computer Science','sveucilisni',180,120,1),(2,'Electrical Engineering','sveucilisni',180,120,1),(3,'Information and Communication Technology','sveucilisni',180,120,1),(4,'Mechanical Engineering','sveucilisni',180,120,2),(5,'Naval Architecture','sveucilisni',180,120,2),(6,'Aeronautical Engineering','sveucilisni',180,120,2),(7,'Business Economics','sveucilisni',180,120,3),(8,'International Business','sveucilisni',180,120,3),(9,'Marketing','sveucilisni',180,120,3),(10,'Law','sveucilisni',300,0,4),(11,'Public Administration','strucni',180,0,4),(12,'Criminology','strucni',180,0,4),(13,'Psychology','sveucilisni',180,120,5),(14,'Sociology','sveucilisni',180,120,5),(15,'History','sveucilisni',180,120,5),(16,'Economics','sveucilisni',180,120,6),(17,'Management','sveucilisni',180,120,6),(18,'Finance','sveucilisni',180,120,6),(19,'Electrical Engineering','sveucilisni',180,120,7),(20,'Mechanical Engineering','sveucilisni',180,120,7),(21,'Naval Architecture','sveucilisni',180,120,7),(22,'Law','sveucilisni',300,0,8),(23,'Public Administration','strucni',180,0,8),(24,'Criminal Law','strucni',180,0,8),(25,'Croatian Language and Literature','sveucilisni',180,120,9),(26,'English Language and Literature','sveucilisni',180,120,9),(27,'History','sveucilisni',180,120,9),(28,'Medicine','sveucilisni',360,0,10),(29,'Dental Medicine','sveucilisni',360,0,10),(30,'Pharmacy','sveucilisni',300,0,10),(31,'Mechanical Engineering','sveucilisni',180,120,11),(32,'Electrical Engineering','sveucilisni',180,120,11),(33,'Computer Engineering','sveucilisni',180,120,11),(34,'Medicine','sveucilisni',360,0,12),(35,'Dental Medicine','sveucilisni',360,0,12),(36,'Biotechnology','sveucilisni',180,120,12),(37,'Law','sveucilisni',300,0,13),(38,'Public Administration','strucni',180,0,13),(39,'European Studies','strucni',180,0,13),(40,'Psychology','sveucilisni',180,120,14),(41,'Sociology','sveucilisni',180,120,14),(42,'Philosophy','sveucilisni',180,120,14),(43,'Economics','sveucilisni',180,120,15),(44,'Management','sveucilisni',180,120,15),(45,'Marketing','sveucilisni',180,120,15),(46,'Computer Science','sveucilisni',180,120,16),(47,'Electrical Engineering','sveucilisni',180,120,16),(48,'Information Technology','sveucilisni',180,120,16),(49,'Agricultural Engineering','sveucilisni',180,120,17),(50,'Agronomy','sveucilisni',180,120,17),(51,'Food Technology','sveucilisni',180,120,17),(52,'Law','sveucilisni',300,0,18),(53,'Public Administration','strucni',180,0,18),(54,'European Law','strucni',180,0,18),(55,'Economics','sveucilisni',180,120,19),(56,'Finance','sveucilisni',180,120,19),(57,'Marketing','sveucilisni',180,120,19),(58,'History','sveucilisni',180,120,20),(59,'Sociology','sveucilisni',180,120,20),(60,'Psychology','sveucilisni',180,120,20),(61,'Economics','sveucilisni',180,120,21),(62,'Management','sveucilisni',180,120,21),(63,'Tourism','sveucilisni',180,120,21),(64,'Primary Education','sveucilisni',180,120,22),(65,'Preschool Education','strucni',180,0,22),(66,'Special Education','strucni',180,0,22),(67,'Tourism','sveucilisni',180,120,23),(68,'Communication Sciences','sveucilisni',180,120,23),(69,'Cultural Studies','sveucilisni',180,120,23),(70,'English Language and Literature','sveucilisni',180,120,24),(71,'Translation and Interpretation','sveucilisni',180,120,24),(72,'English for Specific Purposes','strucni',180,0,24),(73,'Nautical Studies','strucni',180,0,25),(74,'Maritime Engineering','strucni',180,0,25),(75,'Marine Transport','strucni',180,0,25),(76,'Electrical Engineering','sveucilisni',180,120,26),(77,'Computer Engineering','sveucilisni',180,120,26),(78,'Information Technology','sveucilisni',180,120,26),(79,'Aquaculture','sveucilisni',180,120,27),(80,'Marine Biology','sveucilisni',180,120,27),(81,'Fisheries','sveucilisni',180,120,27),(82,'Economics','sveucilisni',180,120,28),(83,'Management','sveucilisni',180,120,28),(84,'Tourism','sveucilisni',180,120,28),(85,'Nautical Studies','strucni',180,0,29),(86,'Maritime Engineering','strucni',180,0,29),(87,'Marine Transport','strucni',180,0,29),(88,'Restoration','sveucilisni',180,120,30),(89,'Conservation','sveucilisni',180,120,30),(90,'Art History','sveucilisni',180,120,30);
/*!40000 ALTER TABLE `Study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test`
--

DROP TABLE IF EXISTS `Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Test` (
  `studentID` int NOT NULL,
  `courseID` int NOT NULL,
  `Grade` int DEFAULT NULL,
  `AcceptedGrade` tinyint(1) DEFAULT NULL,
  `TestDate` date NOT NULL,
  PRIMARY KEY (`studentID`,`courseID`,`TestDate`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `Test_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `Student` (`studentID`),
  CONSTRAINT `Test_ibfk_2` FOREIGN KEY (`courseID`) REFERENCES `Course` (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test`
--

LOCK TABLES `Test` WRITE;
/*!40000 ALTER TABLE `Test` DISABLE KEYS */;
INSERT INTO `Test` VALUES (180,154,4,1,'2023-05-01'),(180,154,3,0,'2023-06-01');
/*!40000 ALTER TABLE `Test` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_insert_test` BEFORE INSERT ON `Test` FOR EACH ROW BEGIN
    
    IF EXISTS (SELECT 1 FROM Test WHERE studentID = NEW.studentID AND courseID = NEW.courseID AND AcceptedGrade = TRUE) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Student has already accepted a grade for this course';
    END IF;

    
    IF NEW.AcceptedGrade = TRUE AND (NEW.Grade < 2 OR NEW.Grade > 5) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'AcceptedGrade can only be true if Grade is between 2 and 5';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_update_test` BEFORE UPDATE ON `Test` FOR EACH ROW BEGIN
    
    IF EXISTS (SELECT 1 FROM Test WHERE studentID = NEW.studentID AND courseID = NEW.courseID AND AcceptedGrade = TRUE AND NOT (OLD.studentID = NEW.studentID AND OLD.courseID = NEW.courseID AND OLD.TestDate = NEW.TestDate)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Student has already accepted a grade for this course';
    END IF;

    
    IF NEW.AcceptedGrade = TRUE AND (NEW.Grade < 2 OR NEW.Grade > 5) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'AcceptedGrade can only be true if Grade is between 2 and 5';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `profesor_course`
--

DROP TABLE IF EXISTS `profesor_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor_course` (
  `profesorID` int NOT NULL,
  `courseID` int NOT NULL,
  PRIMARY KEY (`profesorID`,`courseID`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `profesor_course_ibfk_1` FOREIGN KEY (`profesorID`) REFERENCES `Profesor` (`profesorID`),
  CONSTRAINT `profesor_course_ibfk_2` FOREIGN KEY (`courseID`) REFERENCES `Course` (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_course`
--

LOCK TABLES `profesor_course` WRITE;
/*!40000 ALTER TABLE `profesor_course` DISABLE KEYS */;
INSERT INTO `profesor_course` VALUES (13,151),(38,151),(13,152),(33,152),(37,152),(10,153),(15,154),(19,155),(28,155),(29,155),(2,156),(19,157),(8,160),(29,160),(19,161),(28,161),(11,162),(17,163),(2,164),(3,165),(28,165),(37,167),(5,169),(9,169),(2,170),(36,171),(3,172),(1,175),(28,175),(6,176),(10,176),(5,177),(9,177),(27,177),(11,178),(21,178),(36,178),(6,180),(20,181),(21,181),(34,181),(21,182),(6,184),(33,184),(27,185),(3,188),(18,188),(28,188),(31,190),(5,195),(30,196),(32,196),(34,197),(24,198),(27,198),(36,198),(38,200),(18,201),(27,202),(35,202),(14,204),(15,204),(17,204),(3,206),(27,206),(32,206),(14,207),(7,209),(38,209),(1,210),(33,210),(8,212),(27,215),(1,216),(7,216),(3,217),(20,217),(23,217),(16,218),(24,218),(17,220),(5,221),(20,224);
/*!40000 ALTER TABLE `profesor_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_course`
--

DROP TABLE IF EXISTS `student_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_course` (
  `studentID` int NOT NULL,
  `courseID` int NOT NULL,
  `dateOfEnrollment` date NOT NULL,
  PRIMARY KEY (`studentID`,`courseID`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `Student` (`studentID`),
  CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`courseID`) REFERENCES `Course` (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_course`
--

LOCK TABLES `student_course` WRITE;
/*!40000 ALTER TABLE `student_course` DISABLE KEYS */;
INSERT INTO `student_course` VALUES (181,224,'2024-01-27'),(182,155,'2024-03-30'),(184,154,'2024-04-18'),(184,159,'2023-08-18'),(184,169,'2023-07-29'),(184,207,'2024-01-07'),(187,213,'2023-08-06'),(191,190,'2024-03-30'),(192,160,'2023-08-04'),(193,159,'2023-11-21'),(193,209,'2024-01-28'),(196,155,'2023-11-01'),(196,159,'2023-09-19'),(196,176,'2023-12-14'),(197,180,'2023-07-25'),(198,153,'2024-05-20'),(201,208,'2024-01-20'),(202,161,'2023-06-12'),(203,164,'2024-04-21'),(203,166,'2023-11-14'),(203,187,'2023-07-27'),(204,186,'2024-05-20'),(205,204,'2024-02-27'),(209,199,'2023-12-25'),(210,208,'2023-07-02'),(211,193,'2023-07-12'),(212,168,'2024-04-09'),(212,203,'2024-03-15'),(214,223,'2024-05-16'),(215,152,'2023-08-05'),(216,181,'2023-11-27'),(216,195,'2024-03-28'),(216,211,'2023-08-15'),(217,205,'2024-01-09'),(217,219,'2024-01-19'),(217,220,'2023-10-31'),(218,196,'2023-10-02'),(218,203,'2023-09-02'),(218,212,'2023-07-12'),(219,152,'2023-08-04'),(219,160,'2024-02-20'),(219,164,'2023-06-09'),(219,170,'2023-10-05'),(220,154,'2023-08-17'),(220,214,'2023-08-15'),(221,164,'2023-05-27'),(222,156,'2023-10-28'),(224,158,'2023-06-10'),(224,208,'2023-06-18'),(225,198,'2023-08-31'),(225,209,'2024-02-25'),(226,173,'2023-09-01'),(226,211,'2024-04-27'),(227,218,'2024-02-16'),(228,209,'2023-06-11'),(228,215,'2023-06-06'),(230,197,'2023-11-14'),(231,173,'2023-11-28'),(231,178,'2023-12-30'),(231,204,'2023-11-28'),(232,169,'2024-01-02'),(233,169,'2024-03-05'),(233,204,'2023-06-19'),(234,190,'2023-09-15'),(236,175,'2023-06-26'),(237,154,'2023-11-18'),(237,160,'2023-06-04'),(237,177,'2024-04-19'),(237,217,'2023-08-16'),(238,159,'2023-09-15'),(241,182,'2023-06-30'),(242,167,'2023-08-28'),(244,177,'2023-07-30'),(245,224,'2023-09-10'),(246,219,'2023-10-11'),(246,220,'2023-11-04'),(249,170,'2023-10-01'),(249,185,'2023-06-06'),(250,183,'2024-05-26'),(250,203,'2023-08-29'),(251,192,'2023-06-15'),(251,217,'2024-04-03'),(252,166,'2023-05-31'),(252,168,'2024-03-06'),(252,174,'2023-11-28'),(253,168,'2024-04-19'),(253,190,'2023-12-26'),(255,164,'2024-03-13'),(255,189,'2024-04-29'),(256,160,'2023-12-15'),(256,223,'2024-01-10'),(257,187,'2024-04-14'),(258,205,'2023-06-12'),(258,213,'2023-10-20'),(259,162,'2023-07-31'),(263,159,'2024-01-24'),(263,191,'2023-09-24'),(263,205,'2023-10-27'),(264,195,'2024-02-05'),(265,155,'2023-12-09');
/*!40000 ALTER TABLE `student_course` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-27 11:43:39
