import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

import './AboutPage.css';

function AboutPage() {
  return (<>
    <div className="moveDown"></div>
    <center className="container">
      <div>
        <h2 item align="center" >About Page</h2>
        <p>Free Joke: What's a developer's least favorite movie?  - A bug's life! </p>
        <p>
          This app was created within a two week sprint during Tier 3 of Prime Digital Academy's Full-Stack Software Engineering program. It was created by Nate Notermann.
          Please feel free to visit move of his work at the links below, or by scanning the QR code below.
          The Technologies used are:
          HTML,
          Javascript,
          react/saga/redux,
          Node.js,
          Express,
          Postgres.SQL,
          Postman,
          Material UI,
          PhotoShop,
          After Effects,
          Media Encoder,
          EZ Gif.Com,
          and Apple Shortcuts(QR code).
        </p>
        <br></br>
        <div class="linksDiv">
          <p>
            <a href='https://www.linkedin.com/in/nate-notermann/' target="_blank" rel="noopener noreferrer"><img
              alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
              height='28px' /></a> -
            Linkedin profile - <a href='https://www.linkedin.com/in/nate-notermann/' target="_blank"
              rel="noopener noreferrer">LINK</a>
            <br></br>

            <a href='https://docs.google.com/document/d/1mFvEvQ7kiSoQ_RPUhPihl8GRdw0UNEAm5k25bxaU5Sk/edit?usp=sharing'
              target="_blank" rel="noopener noreferrer"><img alt="linkedin"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/800px-Google_Docs_2020_Logo.svg.png"
                height='28px' /></a> - Resume - <a
                  href="https://docs.google.com/document/d/1mFvEvQ7kiSoQ_RPUhPihl8GRdw0UNEAm5k25bxaU5Sk/edit?usp=sharing"
                  target="_blank" rel="noopener noreferrer">LINK</a>
            <br></br>
            <a href="mailto: nate.notermann@gmail.com" target="_blank" rel="noopener noreferrer"><img alt="linkedin"
              src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-Logo-2013.png" height='28px' /></a> - Don't
            hesitate to reach out via Email - <a href="mailto: nate.notermann@gmail.com">LINK</a>
          </p>
        </div>

   
        <p>
          Special thanks to family and friends.
          I'd also like to all of the staff at prime Digital Academy and everyone in the Jemisin cohort.
          EXTRA SPECIAL Thanks to my instructors Liz and Dane!
        </p>

        <div className="logo"></div>
        <div className="githubQR"></div>

      </div>
    </center>
  </>



  );
}

export default AboutPage;
