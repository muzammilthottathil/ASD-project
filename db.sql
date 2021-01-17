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
-- Populating table => doctor 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`doctor` (`doc_name`, `doc_spec`) VALUES ('doctor-1', 'MBBS,MD');




-- ---------------------------------------------------------------------------------
-- Populating table => hospital 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`hospital` (`hos_name`, `hos_contact`, `hos_address`, `hos_latitude`, `hos_longitude`) VALUES ('Kozhikode Medical College', '9746504524', 'Kozhikode', '11.272145', '75.838451');




-- ---------------------------------------------------------------------------------
-- Populating table => services 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`services` (`ser_id`, `ser_name`) VALUES ('1', 'X-RAY');




-- ---------------------------------------------------------------------------------
-- Populating Relation => hospital_services 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`hospital_services` (`hos_ser_id`, `hos_id`, `ser_id`) VALUES ('1', '1', '1');




-- ---------------------------------------------------------------------------------
-- Populating Relation => doctor_hospital 
-- ---------------------------------------------------------------------------------

INSERT INTO `find_my_doctor`.`doctor_hospital` (`hos_id`, `doc_id`, `time`) VALUES ('1', '1', '9 : 00 AM to 12 : 00 PM,3 : 00 PM to 8 : 00 PM,8 : 30 PM to 11 : 00 PM');


AIzaSyDkzLSBBWmB40Qo9CG3vH2sF1yQHFN7i5Q



