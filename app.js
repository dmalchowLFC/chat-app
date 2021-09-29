const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => console.log(`app.js is running on ${port}!`));