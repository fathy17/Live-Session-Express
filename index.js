const express = require('express');
const app = express();
const pool = require('./queries.js');

const products = require('./routes/products.js');
const blog = require('./routes/blog');
const home = require('./routes/home.js');
const country = require('./routes/world.js');

pool.connect(() => {
  console.log('database connected');
});

app.use('/products', products);
app.use('/', home);
app.use('/blog', blog);
app.use('/country', country);

app.listen(3000);
