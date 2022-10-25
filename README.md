
# Wiki-hehe-pedia 

<em>Duration: 2 Week Sprint</em>

I wanted to create ful-stack application that allowed users to search an index of comedians by first name, last name, keywords and location. I included links to each comedians social media sites like Instagram, Twitter, Youtube, and more. I also wanted user to be able to save their favorite comedians to a list for future reference.

The goal was to build an application which utilizes the full stack C.R.U.D.(Create, Read, Update, Delete) in order to run database requests, render items to the dom, and create a responsive and immersive experience within the app. 


To see the fully functional site, please visit: [Wiki-hehe-pedia](https://wiki-hehe-pedia.herokuapp.com/#/home)

<br>


### Languages and Programs:
<!-- HTML -->
<a href="https://html.com/about/" target="_blank"> <img align="left" alt="HTML" height ="42px"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"> </a>
<!-- javascript -->
<a href="https://www.javascript.com/" target="_blank"> <img align="left" alt="JavaScript" height ="42px"  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"> </a>
<!-- react.js -->
<a href="https://reactjs.org/" target="_blank"> <img align="left" alt="React" height ="42px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></a>
<!-- redux -->
<a href="https://react-redux.js.org/" target="_blank"> <img align="left" alt="React-Redux" height ="42px" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"></a>
<!-- saga -->
<a href="https://redux-saga.js.org/" target="_blank"> <img align="left" alt="React-Redux-Saga" height ="42px" src="https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png"></a>
<!-- Material UI -->
<a href="https://mui.com/" target="_blank"> <img src="https://img.icons8.com/color/480/material-ui.png" align="left" alt="MUI" height='42px'/> </a>
<!-- VSCode -->
<a href="https://code.visualstudio.com/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" align="left" alt="Vscode" height='42px'/> </a>
<!-- node.js -->
<a href="https://nodejs.org" target="_blank"><img align="left" alt="Node.js" height ="42px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"></a>
<!-- postman -->
<a href="https://www.postman.com/" target="_blank"><img align="left" alt="Postman" height ="42px" src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"></a>
<!-- postico -->
<a href="https://eggerapps.at/postico/" target="_blank"> <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_9527e481fa86aee7aef5c962698d78ee/postico.png" align="left" alt="Postico" height='42px'/> </a>
<!-- postreSQL -->
<a href="https://www.postgresql.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800" align="left" alt="postreSQL" height='42px'/> </a>


<br>
<br>


## Screen Shots



<br>


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)



## Create database and table

The below SQL queries will set up the **entire database**, including 3 tables and **all comedians data**.  
All you need to do is copy & paste all of the code below into Postico, and click execute. The included database.sql file is identical for easy importing directly from postico.

```SQL
--------- START -- COPY --- AND -- PASTE -- HERE ----------

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

```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- If app doesn't automatically opening the browser, then Navigate to: `localhost:3000`




<br>





## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

Directory Structure:
`package.json`)
- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - LandingPage/LandingPage
  - Nav/Nav (Navigation bar)
  - UserPage/UserPage (Browse all comedians)
  - LoginPage/LoginPage
  - LoginForm/LoginForm
  - LoginOutButton/LoginOutButton
  - AboutPage/AboutPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - LogOutButton/LogOutButton
  - RegisterPage/RegisterPage
  - RegisterForm/RegisterForm
  - ProtectedRoute/ProtectedRoute
  - SearchPage/SearchPage
  - Settings/Settings 
  - ComedianDetails/ComedianDetails 
  - ComedianItem/ComedianItem 
  - BackButton/BackButton 

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy


## Developer

Nate Notermann - all work -x

<!-- heroku app App link-->
<a href='https://wiki-hehe-pedia.herokuapp.com/#/home'><img alt="heroku" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png" height='18px'/></a> - Fully Deployed App - [Wiki-HeHe-pedia](https://wiki-hehe-pedia.herokuapp.com/#/home)
<!-- Linkdin Link -->
<a href='https://www.linkedin.com/in/nate-notermann/'><img alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" height='18px'/></a> - Linkedin profile - [Linkedin Profile](https://www.linkedin.com/in/nate-notermann/)
<!-- Resume Link -->
<a href='https://docs.google.com/document/d/1AFwkaIAh_q_hZW1El2RY0tds35-Sx-Gi3TkMtMaZYnc/edit?usp=sharing'><img alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/800px-Google_Docs_2020_Logo.svg.png" height='18px'/></a> - Resume - [Node.js](https://nodejs.org/en/)
<!-- Email Link -->
<a href = "mailto: nate.notermann@gmail.com"><img alt="linkedin" src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-Logo-2013.png" height='18px'/></a> - Don't hesitate to reach out via -  <a href = "mailto: nate.notermann@gmail.com">email!</a>

<br> 


