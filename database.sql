-- The below SQL queries will set up the entire database, including 3 tables and all comedians data.  
-- All you need to do is copy & paste all of the code below into Postico, and click execute. -- 


---------- START -- COPY --- AND -- PASTE -- HERE ----------

------ CREATE TABLES ------
-- CREATE USER TABLE --
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar(25) NOT NULL UNIQUE,
	"password" varchar(200) NOT NULL,
	"name" varchar(25),
	"access_level" int NOT NULL DEFAULT 3
);

-- CREATE COMEDIANS TABLE --
CREATE TABLE "comedians" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR (50),
"last_name" VARCHAR (50),
"icon" VARCHAR (50),
"genre" VARCHAR (50),
"instagram_link" VARCHAR (255),
"youtube_link" VARCHAR (255),
"twitter_link" VARCHAR (255),
"website_link" VARCHAR (255),
"city" VARCHAR (50),
"description" TEXT
);

-- CREATE FAVORITES TABLE --
CREATE TABLE "favorites" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
"comedian_id" INT REFERENCES "comedians" ON DELETE CASCADE NOT NULL
);


-- ADD Admin and USER 1 -- 
INSERT INTO "user" ( "username", "password", "name", "access_level" ) VALUES 
( 'admin', '$2a$10$cdwGyp.FbNfJczpdYd2s5O0aH5IGiCh0kvHCSmcCSKK25bRFuBLGa', 'Admin', 1),  --admin, password is: "admin"
( 'user1', '$2a$10$kztK6AtXpJ2dNyegvTyOQeDfh./6TnL8.SrB6SNAzQaahG/BLdIdO', 'user1', 3); -- user 1, password is: "user1"

------ COMEDIAN DATA ------
INSERT INTO "comedians" ("first_name", "last_name", "icon", "genre", "instagram_link", "twitter_link","youtube_link", "website_link", "city" )
VALUES
('Nate','Bargatze','images/Icons/IconsNate.jpg','Clean','https://www.instagram.com/natebargatze/','https://www.youtube.com/watch?v=pGUhBzSgOxw&ab_channel=NetflixIsAJoke','https://twitter.com/natebargatze?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','https://natebargatze.com/','Nashville'),
('Ronny','Chieng','images/Icons/icons_0000_rony2.jpg','Cool','https://www.instagram.com/ronnychieng/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','Los Angeles'),
('Whitteny','Cummings','images/Icons/icons_0006_whitney_cummings.jpg','Adult','https://www.instagram.com/whitneycummings/','https://www.youtube.com/user/MonicaNevi','https://twitter.com/monicanevi?lang=en','https://monicanevi.com/','Los Angeles'),
('Kaitlyn','DaleMore','images/Icons/iconDale.jpg','Dale','https://www.instagram.com/seguratom/?hl=en','https://www.instagram.com/seguratom/?hl=en','https://www.instagram.com/seguratom/?hl=en', 'https://www.instagram.com/seguratom/?hl=en','Minneapolis'),
('Francesca','Fiorentini','images/Icons/IconsFrancesca.jpg','Political','https://www.instagram.com/franifio/?hl=en','https://www.youtube.com/c/franifio','https://twitter.com/franifio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','https://www.francescafiorentini.com/','Los Angeles'),
('Jena','Friedman','images/Icons/IconsJena.jpg','Political','https://www.instagram.com/jenafriedman/','https://www.youtube.com/user/JenaFriedman2/featured','https://twitter.com/JenaFriedman','http://www.jenafriedman.com/','Los Angeles'),
('Tiffany','Haddish','images/Icons/icons_0008_tiffany.jpg','Adult','https://www.instagram.com/tiffanyhaddish/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','Los Angeles'),
('Hari','Kondabolu','images/Icons/IconsHari.jpg','Political','https://www.instagram.com/harikondabolu/','link','https://twitter.com/harikondabolu','https://harikondabolu.com/','New York'),
('Matteo','Lane','images/Icons/IconsMatteo.jpg','LGBTQ','https://www.instagram.com/matteolane/','link','link','link','New York'),
('Becky','Lucas','images/Icons/IconsBecky.jpg','Silly','https://www.instagram.com/beckylucas__/','link','link','link','Sydney, Australia'),
('Carmen','Lynch','images/Icons/IconsCarmen.jpg','Goofy & Spanish','https://www.instagram.com/carmencomedian/?hl=en','link','link','link','New York'),
('Liz','Miele','images/comedians/liz_miele_icon.jpg','Mental Health','https://www.instagram.com/lizmiele/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','New York'),
('Hasan','Minhaj','images/Icons/IconsHassan.jpg','Political','https://www.instagram.com/hasanminhaj/?hl=en','link','link','link','New York'),
('Sam','Morril','images/Icons/icons_0011_sam.jpg','Short Jokes','https://www.instagram.com/lizmiele/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','New York'),
('Monica','Nevi','images/comedians/monica_nevi_icon.jpg','Positive','https://www.instagram.com/monicanevi/','https://www.youtube.com/channel/UCQB3H0dKK-U0T0nueFX7mjg/joinFull','https://twitter.com/monicanevi?lang=en','https://monicanevi.com/','Seatle'),
('Trevor','Noah','images/Icons/IconsTrevor.jpg','Political','https://www.instagram.com/trevornoah/?hl=en','link','link','link','New York'),
('Mark','Normand','images/Icons/icons_0013_MarkNormand_800x800.jpg','Short Jokes','https://www.instagram.com/monicanevi/','https://www.youtube.com/user/MonicaNevi','https://twitter.com/monicanevi?lang=en','https://monicanevi.com/','New York'),
('Christina','P','images/Icons/iconsChristina.jpg','Mom Stories','https://www.instagram.com/seguratom/?hl=en','https://www.youtube.com/user/tomsegura','https://twitter.com/tomsegura?','https://tomsegura.com/','Austin'),
('Mrs','Pats','images/Icons/iconpats.jpg','NSFW','https://www.instagram.com/lizmiele/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','Los Angeles'),
('Joe','Rogan','images/Icons/IconJoeRogan.jpg','Basic','https://www.instagram.com/lizmiele/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','Austin'),
('Amy','Schumer','images/Icons/iconsAmy.jpg','Ruanchy','https://www.instagram.com/fan.amy.schumer/','https://www.youtube.com/user/MonicaNevi','https://twitter.com/monicanevi?lang=en','https://monicanevi.com/','Los Angeles'),
('Tom','Segura','images/comedians/tom_segura_icon.jpg','Dad Stories & Spanish','https://www.instagram.com/seguratom/?hl=en','https://www.youtube.com/user/tomsegura','https://twitter.com/tomsegura?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor','https://tomsegura.com/','Austin'),
('Maria','Shehata','images/Icons/IconsMaria.jpg','Fun','https://www.instagram.com/mariashehata/','https://www.youtube.com/c/MariaShehata','https://twitter.com/mariashehata','https://www.mariashehata.com/','London'),
('Ali','Sultan','images/Icons/IconsAliSultan.jpg','Cats','https://www.instagram.com/alisultancomedy/','https://www.youtube.com/channel/UCrV9G1mNWJysDssVGGlX07A','https://twitter.com/Ali_Sultan','https://alisultancomedy.com/','Minneapolis'),
('Wanda','Sykes','images/Icons/icons_0007_wanda.jpg','Ruanchy','https://www.instagram.com/iamwandasykes/','https://www.youtube.com/user/tomsegura','https://twitter.com/tomsegura?','https://tomsegura.com/','Los Angeles'),
('Sarah','Tollemache','images/Icons/icons_0004_sarah.jpg','Dry','https://www.instagram.com/stollemache/','https://www.youtube.com/user/tomsegura','https://twitter.com/tomsegura?','https://tomsegura.com/','New York'),
('Taylor','Tomlinson','images/Icons/icons_0009_taylor.jpg','Mental Health','https://www.instagram.com/taylortomlinson/','https://www.youtube.com/watch?v=oagNYHB3Kzk&ab_channel=NetflixIsAJoke','https://twitter.com/monicanevi?lang=en','https://ttomcomedy.com/','Los Angeles'),
('Irene','Tu','images/Icons/IconsIrene.jpg','LGBTQ','link','link','link','link','Los Angeles'),
('Michelle','Wolf','images/Icons/icons_0005_michelle.jpg','Political','https://www.instagram.com/michelleisawolf/','https://www.youtube.com/watch?v=F9m1jPu7afw&ab_channel=NetflixIsAJoke','https://twitter.com/michelleisawolf','https://www.michelleisawolf.com/about','New York'),
('Ali','Wong','images/Icons/icons_0001_ali_wong.jpg','Mom Stories','https://www.instagram.com/aliwong/','https://www.youtube.com/user/LizMiele','https://twitter.com/lizmiele','https://lizmiele.com/','Los Angeles'),
('Ramy','Youssef','images/Icons/IconsRamy.jpg','Millennial','https://www.instagram.com/ramy/','link','link','link','New York')
;


---------- STOP -- COPY --- AND -- PASTE -- HERE ----------




