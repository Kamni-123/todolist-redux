const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors({
  credentials: true,
  origin:"http://localhost:3000",
}));

app.get('/test', (req, res) => {
  res.json('Hello World!');
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});