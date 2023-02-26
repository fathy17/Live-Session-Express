const pool = require('../queries.js');
const fs = require('fs');

const seedQuery = fs.readFileSync('seeding/seeding.sql', { encoding: 'utf8' });
pool.query(seedQuery, (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  console.log('seeding completed');
  pool.end();
});
