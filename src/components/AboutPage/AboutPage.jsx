import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

import './AboutPage.css';

function AboutPage() {
  return (<>
  <div className="moveDown"></div>
    <div className="container">
      <div>
        <p>Technologies Used:
          HTML
          Javascript
          react/saga/redux
          Node.js
          Express
          Postgres.SQL
          Postman
          Material UI
        </p>
        <p>
          Special thanks to family and friends who have not seen in months but have still been supportive.
          I'd also like to thank everyone from my cohort.
        </p>
        <p>
          EXTRA SPECIAL Thanks to my instructors Liz and Dane!
        </p>
        <br></br>
        <p> What's a developer's least favorite movie?  - A bug's life! </p>
        <br></br>
        <div className="logo"></div>
      </div>
    </div>
    </>
  );
}

export default AboutPage;
