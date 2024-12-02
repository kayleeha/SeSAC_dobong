SHOW TABLES;

USE sesac;

CREATE TABLE visitor(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- PRIMARY KEY는 NOT NULL이기 때문에 NOT NULL 생략해도 됨
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DESC visitor;

INSERT INTO visitor(name, comment) VALUES ('홍길동', '내가 왔다');
INSERT INTO visitor VALUES (null,'이찬희', '으라차차');
INSERT INTO visitor VALUES (null,'삭제 예정', '으라차차');

SELECT * FROM visitor;

UPDATE visitor SET comment="야호~!" WHERE id = 2;

DELETE FROM visitor WHERE id = 3;

####### DCL #######
-- MySQL 사용자 생성
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234'

-- 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password by '1234'

FLUSH PRIVILEGES;

SELECT * FROM mysql.user;

SHOW GRANTS for 'sesac'@'%';