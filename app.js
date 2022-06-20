const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello this is express');
});

app.post('/', (req, res) => {
  res.send('Hello this is post method for express');
});

const port = 3000;

app.listen(port, () => {
  console.log('listening for requests...');
});
