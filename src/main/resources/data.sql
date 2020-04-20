INSERT INTO label(label_name) values('tech');
INSERT INTO label(label_name) values('creative');
INSERT INTO label(label_name) values('physic');

-- INSERT INTO question(title, label_label_ID) values('Mi a hezag?', 1);
--INSERT INTO question(title, label_label_ID) values('Micsoda?',2);*/

INSERT INTO question(title) values('Mikor volt Eger ostroma?');
INSERT INTO question(title) values('Melyik a legnehezebb targy az egyetemen?');
INSERT INTO question(title) values('Mi a kedvenc konyved?');
INSERT INTO question(title) values('Mikor született Ábrahám?');

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

INSERT INTO answer( question_ID,answer_title, correct) values(4, '-1950', true);
INSERT INTO answer( question_ID,answer_title, correct) values(4, '-6000', false);
INSERT INTO answer( question_ID,answer_title, correct) values(4, '4000', false);
INSERT INTO answer( question_ID,answer_title, correct) values(4, 'nem szuletett meg', false);


INSERT INTO user (username, password, role, email, nickname) VALUES ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ADMIN','@','User1');
INSERT INTO user (username, password, role, email, nickname) VALUES ('user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','USER','@','User');
INSERT INTO user (username, password, role, email, nickname) VALUES ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ADMIN','@','Admin');
INSERT INTO user (username, password, role, email, nickname) VALUES ('sanyi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ADMIN','@','Sanyika');
INSERT INTO user (username, password, role, email, nickname) VALUES ('jozsi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ADMIN','@','Jozsika');
INSERT INTO user (username, password, role, email, nickname) VALUES ('bela', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','USER','@','Bela');
INSERT INTO user (username, password, role, email, nickname) VALUES ('margit', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','USER','@','Margitka');
INSERT INTO user (username, password, role, email, nickname) VALUES ('tibor', 'YWxtYWZh','ADMIN','@','Tibike');

INSERT INTO user_label (user_ID, label_ID) VALUES(1,1);
INSERT INTO user_label (user_ID, label_ID) VALUES(2,2);
INSERT INTO user_label (user_ID, label_ID) VALUES(5,2);