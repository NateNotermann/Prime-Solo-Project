const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/:search', (req, res) => {
router.get('/:className/:searchItem', (req, res) => {
  const column = req.params.className;
  const searchItem = req.params.searchItem;
  // const {
  //   className, 
  //   searchItem, 
  // } = req.body;
  console.log('req.params.className', req.params.className);
  console.log('req.params.searchItem', req.params.searchItem);

  const query =
    `SELECT * FROM "comedians" 
     WHERE ${column} ILIKE '%${searchItem}%' 
     ORDER BY "comedians"."first_name";`;


  pool.query(query)
    // pool.query(query, [searchItem])
    // pool.query(query, [column, searchItem])

    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR Search Router', error);
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