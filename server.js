// import your node modules
const express = require('express');
const server = express();
// Database
const db = require('./data/db.js');
// Middleware Dependencies
const helmet = require('helmet');

// add your server code starting here

// Middleware
server.use(helmet());
server.use(express.json());

/* --- Endpoints --- */
// POST
server.post('/api/posts', (req, res) => {
  const post = req.body;

});

// GET
server.get('/api/posts', (req, res) => {
  db.find()
    .then(posts => res.json(posts))
    .catch(err => {
      console.log(`'/api/posts' GET error: ${err}`);
      res.status(500).json({ error: "The posts' information could not be retrieved." });
    });
});

// Server Start!
const port = 5001;
server.listen(port, () => console.log(`\n=== Server Listening on Port ${port} ===`));