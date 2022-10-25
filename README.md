
# Wiki-hehe-pedia 

<em>Duration: 2 Week Sprint</em>

I wanted to create ful-stack application that allowed users to search an index of comedians by first name, last name, keywords and location. I included links to each comedians social media sites like Instagram, Twitter, Youtube, and more. I also wanted user to be able to save their favorite comedians to a list for future reference.

The goal was to build an application which utilizes the full stack C.R.U.D.(Create, Read, Update, Delete) in order to run database requests, render items to the dom, and create a responsive and immersive experience within the app. 


To see the fully functional site, please visit: [Wiki-hehe-pedia](https://wiki-hehe-pedia.herokuapp.com/#/home)


## Screen Shot

<br>


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)



## Create database and table

Create a new database called `prime_app` and create a `user` table. If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

 All  you need to do it copy & Paste all of the SQL query below into Postico, and click execute. The SQL query to add all comedian information is at the very bottom of the ReadMe to save space.

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
```



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


## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:
`package.json`)
- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2





## Nate Notermann


Hello and welcome to my Github! My name is **Nate Notermann**. I am a **Full-Stack Software Engineer**. I've worked in many languages starting with a foundation in **Html**, **CSS** and **Javascript**, **jQuery** all the way to **React**, **Redux**. Then building on those with **express**, **Node**, **Ajax**, **Axios**, **SQL** and more. 
<br/>

 ### Trivia
I love all things tech. Whether it be playing around with AI image generators like 
  [Midjourney](https://www.midjourney.com/home/) or  
  [DALL-E-2](https://openai.com/dall-e-2/), or creating [deepfakes](https://vimeo.com/742504379) of old movies like [Singin' in the Rain](https://www.rottentomatoes.com/m/singin_in_the_rain). Or catching up on gaming news & podcasts like [GameScoop!](https://www.youtube.com/watch?v=E-HuWmdVVng&list=PL99PCYdTX-vc_2yb9cnTYyqgiO5ujqp2R&ab_channel=IGNGames). I'm a casual PC gamer that enjoys building their own custom PC's. I also remotely  assist with video production for a weekly comedy podcast called [2 Non-Doctors](https://www.instagram.com/2nondrs/?hl=en).
  <br>
  <br>
  As far as non-tech related stats go, I love running around the lakes in my free time. I also enjoy catching up on comedy podcasts. Mild movie buff. Cat Dad of 1. 

