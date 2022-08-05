const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// SAGAS ARE SERVER SIDE
// -wht ever router.get('/:id', --> /:id is the 'action.payload from the SAGA
router.get('/', (req, res) => {
  // GET route code here
  // req.body going into a bigger object
  // req.params TARGET ONE SPECIFIC THING like id or namer or last_name
  const query = 
  `SELECT * from comedians
  WHERE id = '1';`;

  pool.query(query)
  .then( result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('ERROR in (allcomedians.router.js)');
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
