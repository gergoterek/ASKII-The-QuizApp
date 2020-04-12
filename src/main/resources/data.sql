INSERT INTO label(label_name) values('tech');
INSERT INTO label(label_name) values('creative');
INSERT INTO label(label_name) values('physic');

-- INSERT INTO question(title, label_label_ID) values('Mi a hezag?', 1);
--INSERT INTO question(title, label_label_ID) values('Micsoda?',2);*/

INSERT INTO question(title) values('Mikor volt Eger ostroma?');
INSERT INTO question(title) values('Melyik a legnehezebb targy az egyetemen?');
INSERT INTO question(title) values('Mi a kedvenc konyved?');

INSERT INTO answer( question_ID,answer_title, correct) values(1, '1222', false);
INSERT INTO answer( question_ID,answer_title, correct) values(1, '1456', false);
INSERT INTO answer( question_ID,answer_title, correct) values(1, '1552', true);
INSERT INTO answer( question_ID,answer_title, correct) values(1, '2k20', false);

INSERT INTO answer( question_ID,answer_title, correct) values(2, 'Szamalap Pepevel', true);
INSERT INTO answer( question_ID,answer_title, correct) values(2, 'Projekt Eszkozok', false);
INSERT INTO answer( question_ID,answer_title, correct) values(2, 'Nummod', false);
INSERT INTO answer( question_ID,answer_title, correct) values(2, 'Anal', false);

INSERT INTO answer( question_ID,answer_title, correct) values(3, 'Szamitogepes halozatok', true);
INSERT INTO answer( question_ID,answer_title, correct) values(3, 'Haboru es beke', false);
INSERT INTO answer( question_ID,answer_title, correct) values(3, 'Nummod', false);
INSERT INTO answer( question_ID,answer_title, correct) values(3, 'CI', false);

INSERT INTO role (role_name) VALUES ('admin');
INSERT INTO role (role_name) VALUES ('user');
INSERT INTO role (role_name) VALUES ('guest');

INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','User1',1);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..',',@','User',1);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Admin',1);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('sanyi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Sanyika',1);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('jozsi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Jozsika',2);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('bela', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Bela',2);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('margit', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Margitka',2);
INSERT INTO user (username, password, email, nickname, role_ID) VALUES ('tibor', 'YWxtYWZh','ROLE_ADMIN','Tibike',2);

INSERT INTO user_label (user_ID, label_ID) VALUES(1,1);
INSERT INTO user_label (user_ID, label_ID) VALUES(2,2);
INSERT INTO user_label (user_ID, label_ID) VALUES(5,2);