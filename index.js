const fs = require('node:fs/promises');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/home', async (req, res) => {
  const data = await fs.readFile('data/events.json', 'utf8');
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;



