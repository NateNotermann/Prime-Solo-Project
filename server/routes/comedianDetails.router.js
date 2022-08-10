const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// SAGAS ARE SERVER SIDE
// -wht ever router.get('/:id', --> /:id is the 'action.payload from the SAGA
router.get('/:id', (req, res) => {
  // GET route code here
  // req.body going into a bigger object
  // req.params TARGET ONE SPECIFIC THING like id or namer or last_name
  const id = req.params.id;   // need BOTH a const id = req.params.id; AND '/:id'
  // const query = 
  // `SELECT * from comedians
  // WHERE id = $1;`;
  pool.query(`SELECT * from comedians
  WHERE id = $1`,[id])
  .then( result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('ERROR in (allcomedians.router.js)', error);
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
