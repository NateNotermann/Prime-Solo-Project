const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query =
    `SELECT comedians.id, first_name, last_name, icon FROM comedians
    JOIN favorites ON
    favorites.comedian_id = comedians.id
    WHERE favorites.user_id = 1 
    ORDER BY favorites.id;
    `;

  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR in FAVORITES Router', error);
      res.sendStatus(500);
    })
});








/** 
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;