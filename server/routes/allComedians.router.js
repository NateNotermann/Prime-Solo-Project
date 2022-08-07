const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = 
  `SELECT * FROM "comedians" ORDER BY "comedians"."first_name";`;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('ERROR in (all comedians.router.js)');
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
