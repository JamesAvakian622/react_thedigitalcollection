const express = require('express');
const cors = require('cors');
const uploadRoute = require('./upload');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', uploadRoute);

module.exports = app;
