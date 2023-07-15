'use strict';

const express = require('express');

// Constants
const PORT = 7000;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';


// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello World!';
  res.send(msg);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);