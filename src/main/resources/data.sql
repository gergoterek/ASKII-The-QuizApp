INSERT INTO roles (role_name) VALUES ('admin');
INSERT INTO roles (role_name) VALUES ('user');
INSERT INTO roles (role_name) VALUES ('guest');

INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','User1',1);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..',',@','User',1);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Admin',1);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('sanyi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Sanyika',1);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('jozsi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Jozsika',2);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('bela', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Bela',2);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('margit', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','@','Margitka',2);
INSERT INTO users (username, password, email, nickname, role_ID) VALUES ('tibor', 'YWxtYWZh','ROLE_ADMIN','Tibike',2);

INSERT INTO user_labels(user_ID, label_ID) VALUES(1,1);
INSERT INTO user_labels(user_ID, label_ID) VALUES(2,2);
INSERT INTO user_labels(user_ID, label_ID) VALUES(5,2);

INSERT INTO labels(label_ID, label_name) values(4,'tech');
INSERT INTO labels(label_ID, label_name) values(1,'creative');
INSERT INTO labels(label_ID, label_name) values(4,'physic');


INSERT INTO questions(question_ID, question_title, label_ID) values(2, 'Mi a hezag?', 2);
INSERT INTO questions(question_ID, question_title, label_ID) values(1, 'Micsoda?', 1);

INSERT INTO answers(question_ID, answer_title, correct) values(1, 'semmi', 1);
INSERT INTO answers(question_ID, answer_title, correct) values(1, 'Valami?', 0);
INSERT INTO answers(question_ID, answer_title, correct) values(1, 'szia', 0);
INSERT INTO answers(question_ID, answer_title, correct) values(1, 'telefon', 0);
