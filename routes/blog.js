const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Response from GET blog');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Response from GET blog with id ${id}`);
});

module.exports = router;
