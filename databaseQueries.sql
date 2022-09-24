

-- FAVORITES dummy data --
INSERT INTO "favorites" ("user_id", "comedian_id" )
VALUES 
(1,1),
(1,3);


---- ALL QUERYS  ------

-- GET All Comedians --
SELECT * FROM "comedians" ORDER BY "comedians"."first_name";

-- GET Comedian Details --
SELECT * from comedians 
WHERE id = $1;

-- GET All Favorites for $1 user--
SELECT comedians.id, first_name, last_name, icon FROM comedians
JOIN favorites ON
favorites.comedian_id = comedians.id
WHERE favorites.user_id = $1 
ORDER BY favorites.id;

--  optional GROUP BY Comedian_id -- 
SELECT comedians.id, first_name, last_name, icon FROM comedians
JOIN favorites ON
favorites.comedian_id = comedians.id
WHERE favorites.user_id = $1 
GROUP BY comedians.id 
ORDER BY id;


 --- CREATE - Favorite --- 
INSERT INTO favorites (user_id, comedian_id)
VALUES 
($1,$2);

 -- DELETE - Favorite -- 
DELETE FROM favorites WHERE user_id = $1 AND comedian_id = $1; 


-- UPDATE - Username -- 
UPDATE "user" SET username = $1 WHERE id = $2;

-- SEARCH for a single item (first_name/last_name/genre/city/) -- 
SELECT * FROM "comedians" 
WHERE $1 = $2               -- fist_name = 'Tom', -- city = 'Austin'
ORDER BY "comedians"."first_name";
