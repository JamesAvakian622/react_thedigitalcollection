const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: 'dljeojrd7',
  api_key: 'dljeojrd7',
  api_secret: 'jCcXrk6WHebwlhanBJAMExN_d2o'
});

module.exports = cloudinary;
