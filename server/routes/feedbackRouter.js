const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// unused GET route that would send all feedback data to the client
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "id"';

  pool
    .query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Post route that retrieves feedback data from the client and stores it to the database
router.post('/', (req, res) => {
  let newForm = req.body;
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;

  let newFormQuery = [
    newForm.feeling,
    newForm.understanding,
    newForm.support,
    newForm.comments,
  ];

  pool
    .query(queryText, newFormQuery)
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
