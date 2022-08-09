const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// ----- GET ALL FAVORITES ---- //
router.get('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  console.log('req.params.id', req.params.id);
  const query =
    `SELECT favorites.id, comedian_id, first_name, last_name, icon 
    FROM comedians
    JOIN favorites 
    ON favorites.comedian_id = comedians.id
    WHERE favorites.user_id = $1 
    ORDER BY favorites.id;
    `;

  pool.query(query, [id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR in FAVORITES Router', error);
      res.sendStatus(500);
    })
});



/// --------- ALTERNATE SQL - GROUP BY comedian_id ------- //
`SELECT comedians.id, first_name, last_name, icon FROM comedians
  JOIN favorites ON
  favorites.comedian_id = comedians.id
  WHERE favorites.user_id = 1 
  GROUP BY comedians.id 
  ORDER BY id; `


// ----- ADD FAVORITE ---- //
router.post('/', (req, res) => {
  const {
    user_id,
    comedian_id,
  } = req.body;
  console.log('req.body', req.body);
  const queryText =
    `INSERT INTO "favorites" ("user_id", "comedian_id" )
  VALUES 
  ($1, $2);`;
  pool
    .query(queryText, [user_id, comedian_id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR IN POST FAVORITE', err);
    });
});


// ----- DELETE FAVORITE ---- //
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('req.params.id', req.params.id);

  const queryText =
    `DELETE FROM favorites WHERE id = $1;`; // DONT NEED TO SAY USER- JUST 'THIS ID'
    // `DELETE FROM favorites WHERE comedian_id = $1;`;
  pool.query(queryText, [id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR IN DELETE', error);
    });
});




module.exports = router;