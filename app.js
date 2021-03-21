'use strict';
const express = require('express');
const app = express();
const multer = require('multer');
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const NUMBER = 8080;

const INVALID_PARAM_ERROR = 400;
const INVALID_QA_ERROR_MSG = "The question or answer does not exist.";
const SERVER_ERROR = 500;
const SERVER_ERROR_MSG = "An error occurred on the server. Try again later.";

const QUERY = "SELECT * FROM Fbla WHERE id = ?";

/**
 * Establishes a database connection to the yipper database and
 * returns the database object.
 * @return {Object} - The database object for the connection.
 */
async function getDBConnection() {
    const db = await sqlite.open({
      filename: 'fbla.db',
      driver: sqlite3.Database
    });
    return db;
  }

  app.use(multer().none());
  app.use(express.json());

  /**
 * Gets the yips from a specific user
 * @param {string} user - the specified user
 * @return {JSON} - json containing user info
 */
app.get("/fbla/search/:id", async function(req, res) {
  let getId = req.params.id;
  try {
    let db = await getDBConnection();
    let results = await db.all(QUERY, getId);
    await db.close();
    if (results.length === 0) {
      res.type('text');
      res.status(INVALID_PARAM_ERROR).send(INVALID_QA_ERROR_MSG);
    } else {
      res.json(results);
    }
  } catch (err) {
    res.type('text');
    res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

app.use(express.static("public"));
const PORT = process.env.PORT || NUMBER;
app.listen(PORT);