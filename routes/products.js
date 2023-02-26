const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Response from GET products');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Response from GET products with id ${id}`);
});

router.post('/post', (req, res) => {
  res.send('Response from POST products');
});

module.exports = router;
