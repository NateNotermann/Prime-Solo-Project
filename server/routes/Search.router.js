const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/:search', (req, res) => {
router.get('/:search', (req, res) => {
  const search = req.params.search;
  // temporary hard code 'Tom' to make sure route connects
  const query = 
  ` SELECT * FROM "comedians" WHERE "first_name" = $1 ORDER BY "comedians"."first_name";`;
  pool.query(query, [search])

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
