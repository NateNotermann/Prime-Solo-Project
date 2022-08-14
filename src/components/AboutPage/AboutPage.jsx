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

       <a href='https://github.com/NateNotermann' className="link"
          title="Github" target="_blank">Github <span> <a href='https://www.linkedin.com/in/nate-notermann/' className="link"
          title="Linkedin" target="_blank">Linkedin</a> </span> </a>
      
        {/* <a href='https://www.linkedin.com/in/nate-notermann/' className="link"
          title="Linkedin" target="_blank">Linkedin</a> */}
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
