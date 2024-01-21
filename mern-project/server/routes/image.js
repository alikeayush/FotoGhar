// server/routes/image.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the folder where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Image upload route
router.post('/upload-image', upload.single('image'), (req, res) => {
  // Handle the uploaded image (save the file path, etc.)
  const imagePath = req.file.path;
  // Save imagePath to the database or perform other actions as needed
  res.json({ message: 'Image uploaded successfully', imagePath: imagePath });
});

module.exports = router;
