
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

------ ALL TABLES ------
-- USERE TABLE --
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- COMEDIANS TABLE --
CREATE TABLE "comedians" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (50) NOT NULL,
"last_name" VARCHAR (50) NOT NULL,
"icon" VARCHAR (50),
"genre" VARCHAR (50) NOT NULL,
"instagram_link" VARCHAR (255),
"youtube_link" VARCHAR (255),
"twitter_link" VARCHAR (255),
"website_link" VARCHAR (255),
"city" VARCHAR (50) NOT NULL
);

-- FAVORITES TABLE -- 
CREATE TABLE "favorites" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" NOT NULL,
"comedian_id" INT REFERENCES "comedians" NOT NULL
);



 ----- ALL DUMMY DATA --
 -- COMEDIANS dummy data --
INSERT INTO "comedians" ("first_name", "last_name", "icon", "genre", "instagram_link", "twitter_link","youtube_link", "website_link", "city" )
VALUES
('Liz', 'Miele', 'images/comedians/liz_miele_icon.jpg',	'dark_humor', 'https://www.instagram.com/lizmiele/', 'https://www.youtube.com/user/LizMiele', 'https://twitter.com/lizmiele', 'https://lizmiele.com/', 'New York'),
('Monica', 'Nevi', 'images/comedians/monica_nevi_icon.jpg',	'positive', 'https://www.instagram.com/monicanevi/', 'https://www.youtube.com/user/MonicaNevi', 'https://twitter.com/monicanevi?lang=en', 'https://monicanevi.com/', 'Seatle'),
('Tom', 'Segure', 'images/comedians/tom_segura_icon.jpg',	'naughty', 'https://www.instagram.com/seguratom/?hl=en', 'https://www.youtube.com/user/tomsegura', 'https://twitter.com/tomsegura?', 'https://tomsegura.com/', 'Austin')
;


-- FAVORITES dummy data --
INSERT INTO "favorites" ("user_id", "comedian_id" )
VALUES 
(1,1),
(1,3);





---- ALL QUERYS  -----

-- GET All Comedians --
SELECT * FROM "comedians"ORDER BY "comedians"."first_name";

-- Comedian Details --
SELECT * from comedians 
WHERE id = $1;


 -- CREATE - Favorite -- 
INSERT INTO favorites (user_id, comedian_id)
VALUES 
($1,$2);

 -- DELETE - Favorite -- 
 DELETE 