const express = require('express');
const router = express.Router();
const { submitExam, getResults } = require('../controllers/examController');
const { protect } = require('../middleware/authMiddleware');
router.post('/submit', protect, submitExam);
router.get('/results', protect, getResults);
module.exports = router;