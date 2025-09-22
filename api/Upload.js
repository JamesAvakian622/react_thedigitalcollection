const express = require('express');
const router = express.Router();
const cloudinary = require('./cloudinary');
const verifyToken = require('./authMiddleware');

router.post('/upload', verifyToken, async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: 'corvettes',
      tags: ['corvette'],
      transformation: [{ width: 800, crop: 'scale' }],
    });
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).send('Upload failed');
  }
});

module.exports = router;
