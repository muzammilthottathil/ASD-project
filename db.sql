-- ---------------------------------------------------------------------------------
-- Creating Schema => find_my_doctor
-- ---------------------------------------------------------------------------------

CREATE SCHEMA `find_my_doctor` ;





-- ---------------------------------------------------------------------------------
-- Creating Table => doctor
-- ---------------------------------------------------------------------------------

CREATE TABLE `find_my_doctor`.`doctor` (
  `doc_id` INT NOT NULL,
  `doc_name` VARCHAR(45) NOT NULL,
  `doc_spec` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`doc_id`));

ALTER TABLE `find_my_doctor`.`doctor` 
CHANGE COLUMN `doc_id` `doc_id` INT NOT NULL AUTO_INCREMENT ;







-- ---------------------------------------------------------------------------------
-- Creating Table => hospital
-- ---------------------------------------------------------------------------------


CREATE TABLE `find_my_doctor`.`hospital` (
  `hos_id` INT NOT NULL AUTO_INCREMENT,
  `hos_name` VARCHAR(45) NOT NULL,
  `hos_contact` VARCHAR(45) NOT NULL,
  `hos_address` VARCHAR(45) NOT NULL,
  `hos_latitude` VARCHAR(45) NOT NULL,
  `hos_longitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`hos_id`));



-- ---------------------------------------------------------------------------------
-- Creating Table => specialization
-- ---------------------------------------------------------------------------------


CREATE TABLE `find_my_doctor`.`department` (
  `spec_id` INT NOT NULL AUTO_INCREMENT,
  `spec_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`spec_id`));
ALTER TABLE `find_my_doctor`.`department` 
RENAME TO  `find_my_doctor`.`specialization` ;






-- ---------------------------------------------------------------------------------
-- Creating Relation => doctor_spec
-- ---------------------------------------------------------------------------------


CREATE TABLE `find_my_doctor`.`doctor_spec` (
  `doc_id` INT NOT NULL,
  `spec_id` INT NOT NULL,
  INDEX `fk_doctor_spec_1_idx` (`doc_id` ASC) VISIBLE,
  INDEX `fk_doctor_spec_2_idx` (`spec_id` ASC) VISIBLE,
  CONSTRAINT `fk_doctor_spec_1`
    FOREIGN KEY (`doc_id`)
    REFERENCES `find_my_doctor`.`doctor` (`doc_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_doctor_spec_2`
    FOREIGN KEY (`spec_id`)
    REFERENCES `find_my_doctor`.`specialization` (`spec_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);





-- ---------------------------------------------------------------------------------
-- Creating Relation => doctor_hospital => foreign Key -> hos_id & doc_id
-- ---------------------------------------------------------------------------------


CREATE TABLE `find_my_doctor`.`doctor_hospital` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hos_id` INT NOT NULL,
  `doc_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_doctor_hospital_1_idx` (`hos_id` ASC) VISIBLE,
  INDEX `fk_doctor_hospital_2_idx` (`doc_id` ASC) VISIBLE,
  CONSTRAINT `fk_doctor_hospital_1`
    FOREIGN KEY (`hos_id`)
    REFERENCES `find_my_doctor`.`hospital` (`hos_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_doctor_hospital_2`
    FOREIGN KEY (`doc_id`)
    REFERENCES `find_my_doctor`.`doctor` (`doc_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

ALTER TABLE `find_my_doctor`.`doctor_hospital` 
ADD COLUMN `time` VARCHAR(100) NOT NULL AFTER `doc_id`;








-- ---------------------------------------------------------------------------------
-- Creating Table => Services
-- ---------------------------------------------------------------------------------


CREATE TABLE `find_my_doctor`.`services` (
  `ser_id` INT NOT NULL,
  `ser_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ser_id`));






-- ---------------------------------------------------------------------------------
-- Creating Relation => hospital_services => foreign Key -> hos_id & ser_id
-- ---------------------------------------------------------------------------------

CREATE TABLE `find_my_doctor`.`hospital_services` (
  `hos_ser_id` INT NOT NULL,
  `hos_id` INT NOT NULL,
  `ser_id` INT NOT NULL,
  PRIMARY KEY (`hos_ser_id`),
  INDEX `fk_hospital_services_1_idx` (`hos_id` ASC) VISIBLE,
  INDEX `fk_hospital_services_2_idx` (`ser_id` ASC) VISIBLE,
  CONSTRAINT `fk_hospital_services_1`
    FOREIGN KEY (`hos_id`)
    REFERENCES `find_my_doctor`.`hospital` (`hos_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_hospital_services_2`
    FOREIGN KEY (`ser_id`)
    REFERENCES `find_my_doctor`.`services` (`ser_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- ---------------------------------------------------------------------------------
-- Populating table => specialization 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`specialization` (`spec_name`) VALUES
('Psychiatry'),
   ( 'Urology'),
   ( 'Plastic Surgery'),
   ( 'Orthopedics'),
   ( 'Obstetrics and Gynaecology'),
   ( 'General Surgery'),
   ( 'Surgical Gastroenterology'),
   ( 'Cardio-thoracic surgery'),
   ( 'Neurosurgery'),
   ( 'Neurology'),
    ('General Medicine'),
    ('ENT (Ear, Nose and Throat)'),
   ( 'Medical Gastroenterology'),
   ( 'Conito-urinary surgery'),
   ( 'Oncology (Cancer Care)'),
   ( 'Anesthesiology'),
   ( 'Dermatology'),
   ( 'Ophthalmology'),
   ( 'Endocrinology and Clinical Hematology'),
   ( 'Pediatrics'),
   ( 'Pediatric Surgery');

-- ---------------------------------------------------------------------------------
-- Populating relation => doctor_spec 
-- ---------------------------------------------------------------------------------


INSERT INTO `find_my_doctor`.`doctor_spec` (`doc_id`,`spec_id`) VALUES
(1,2),
(1,4),
(2,1),
(2,5),
(3,11),
(3,13),
(3,12),
(4,20),
(4,19),
(5,21),
(5,8),
(5,9),
(6,6),
(6,10),
(7,4),
(7,15),
(8,18),
(8,17),
(9,1),
(9,12),
(9,16),
(10,11),
(10,13),
(11,4),
(11,2),
(12,2),
(12,7),
(12,5),
(13,13),
(13,18),
(14,17),
(14,4),
(15,5),
(15,15),
(15,21),
(16,20),
(16,6),
(17,7),
(17,18),
(18,1),
(18,20),
(18,6),
(19,17),
(19,14),
(20,11),
(20,9);




-- ---------------------------------------------------------------------------------
-- Populating table => doctor 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Ramachandran Nair', 'Psychiatry,Urology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Niyasudheen KK', 'Plastic Surgery,Orthopedics');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Mohammed Iqbal', 'Obstetrics and Gynaecology,General Surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Murukesh Venkatairaman', 'Surgical Gastroenterology,Cardio-thoracic surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Alphonso Panikkal', 'Neurosurgery,Neurology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Muhammed Siddeeq', "General Medicine,ENT (Ear, Nose and Throat)");
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Althaf Ashraf', 'Medical Gastroenterology,Conito-urinary surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Hatif Alif', "Oncology (Cancer Care),Anesthesiology");
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Latheef Hatim', 'Dermatology,Gastroenterology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Rajith Kumar', 'Ophthalmology,Endocrinology and Clinical Hematology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Harish Ramachandran', "ENT (Ear, Nose and Throat,Obstetrics and Gynaecology");
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Ritika Sukumaran', 'Orthopedics,Medical Gastroenterology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Saritha Soman', 'Neurosurgery,Gastroenterology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Thampi Anil', "ENT (Ear, Nose and Throat),Cardio-thoracic surgery");
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. P Unnikrishnan', 'Pediatrics,Urology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Ibthisam Mohammed', 'Dermatology,Plastic Surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Farhana Sakkeer', 'Endocrinology and Clinical Hematology,Ophthalmology');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Seema Vineeth', 'General Medicine,Pediatric Surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Manshoor Iqbal', 'Obstetrics & Gynecology,Conito-urinary surgery');
INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('Dr. Saratha Maneesh', 'Medical Gastroenterology,Psychiatry');




-- ---------------------------------------------------------------------------------
-- Populating table => hospital 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('IBM Hospital', '9746504524', 'Sreekaryam, Trivandrum', '8.557450', '76.912432');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('GMC Trivandrum', '9745323224', 'Medical College PO, Trivandrum', '8.558393', '76.902397');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Ayursree Santhamohanam', '9234251254', 'Sreekaryam Junction, Trivandrum', '8.547416', '76.917123');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('TCS Hospital', '9453373457', 'Kazhakootam, Trivandrum', '8.541598', '76.878964');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Government Homeo', '9240203479', 'Attripa, Trivandrum', '8.530879', '76.888892');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Royasl Hospital', '9345274434', 'Ulloor, Trivandrum', '8.541458', '76.929952');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Chaitanya Hospital', '9273457543', 'Kesavadasapuram, Trivandrum', '8.531798', '76.938062');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Medritina Hospital', '8532535777', 'Pattom, Tricandrum', '8.517495', '76.945109');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Jubilee Memorial Hospital', '9233343243', 'Palayam, Trivandrum', '8.502465', '76.953170');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('SK Hospital', '6324245723', 'Neyyar Dam Rd, Tricandrum', '8.507035', '76.971767');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Lords Hospital', '7250202350', "Maharaja's Lane, Trivandrum", '8.508619', '76.911684');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Ananthapuri Hospital', '7023574572', 'Chakai, Trivandrum', '8.488947', '76.928393');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('SP Fort Hospital', '9665544756', 'Pazhavangadi, Trivandrum', '8.485936', '76.941736');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('PRS Hospital', '9320457534', 'Killipalam, Trivandrum', '8.480365', '76.959287');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Jubilee Memorial Hospital', '9120343434', 'Palayam, Trivandrum', '8.502839', '76.952983');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Sri Ramakrishna Ashrama Hospital', '9435834453', 'Sasthamangalam, Trivandrum', '8.514773', '76.975293');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Geetha Hospital', '9533573373', 'Kanjirampara, Trivandrum', '8.521514', '76.979771');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Maya Ayurveda Eye Hospital', '7235572349', 'Kudappanakunnu, Trivandrum', '8.554400', '76.964754');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Pulse Medicare Hospital', '7564546523', 'Mannanthala, Trivandrum', '8.568595', '76.945939');
INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Sandhya Hospital', '7525345456', 'Chempazhanthy, Trivandrum', '8.569601', '76.908096');



-- ---------------------------------------------------------------------------------
-- Populating table => services 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('1', 'X-RAY');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('2', 'MRI Scan');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('3', 'CT Scan');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('4', 'PET Scan');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('5', 'ECG');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('6', 'Mammogram');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('7', 'Colour Doppler');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('8', 'Anomaly Scan');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('9', 'Dialysis');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('10', 'Anomaly Scan');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('11', 'Neuro & Sleep Lab');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('12', 'Executive Health Check - up');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('13', 'Cardio Diabetic Checkup');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('14', 'Diet Counseling');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('15', 'Physiotherapy');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('16', 'Pathology');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('17', 'Cardiac Wellness Center');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('18', 'Epilepsy Clinic');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('19', 'Headache Clinic');
INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('20', 'Paediatric Neurology Clinic');




-- ---------------------------------------------------------------------------------
-- Populating Relation => hospital_services 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('1', '2', '4');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('2', '7', '4');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('3', '5', '8');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('4', '3', '20');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('5', '7', '1');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('6', '9', '17');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('7', '4', '12');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('8', '3', '16');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('9', '15', '8');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('10', '13', '9');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('11', '12', '2');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('12', '10', '2');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('13', '13', '6');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('14', '7', '6');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('15', '10', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('16', '16', '5');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('17', '5', '10');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('18', '6', '15');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('19', '3', '19');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('20', '4', '12');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('21', '19', '10');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('22', '20', '9');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('23', '11', '10');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('24', '18', '1');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('25', '20', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('26', '3', '2');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('27', '10', '9');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('28', '17', '16');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('29', '8', '2');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('30', '19', '2');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('31', '7', '10');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('32', '20', '19');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('33', '10', '12');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('34', '10', '17');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('35', '9', '13');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('36', '3', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('37', '10', '19');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('38', '13', '12');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('39', '9', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('40', '21', '4');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('41', '19', '13');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('42', '13', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('43', '2', '20');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('44', '5', '16');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('45', '17', '9');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('46', '10', '1');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('47', '19', '3');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('48', '6', '13');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('49', '14', '20');
INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('50', '15', '4');





-- ---------------------------------------------------------------------------------
-- Populating Relation => doctor_hospital 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('21', '1', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('21', '10', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('21', '14', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('21', '20', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('2', '9', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('2', '7', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('2', '4', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('2', '2', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('2', '15', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('3', '1', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '10', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '18', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '13', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '9', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '3', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('4', '6', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('5', '7', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('5', '17', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('6', '1', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('6', '20', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('7', '4', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('7', '8', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('7', '5', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('8', '12', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('8', '2', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('8', '3', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('8', '19', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('8', '18', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('9', '11', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('9', '3', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('10', '6', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '15', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '12', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '11', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '18', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '7', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '6', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('11', '5', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('12', '12', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('13', '13', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('13', '1', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('14', '20', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('14', '2', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('15', '1', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('16', '9', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('16', '7', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('17', '15', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('18', '2', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('18', '9', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('18', '19', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('19', '4', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('20', '7', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');
INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('20', '17', 'MON-WED 9 : 00 AM to 12 : 00 PM,THU-FRI 3 : 00 PM to 8 : 00 PM,SAT-SUN 8 : 30 PM to 11 : 00 PM');



 


 


 

 


 


 


 




