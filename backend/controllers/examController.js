const Result = require('../models/Result');

exports.submitExam = async (req, res) => {
    try {
        const { answers, questions } = req.body;
        
        let score = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correct) {
                score++;
            }
        });

        const result = new Result({
            userId: req.user.id,
            score: score,
            totalQuestions: questions.length,
            date: new Date()
        });

        await result.save();
        res.status(201).json({ 
            success: true, 
            score, 
            totalQuestions: questions.length 
        });
    } catch (error) {
        res.status(500).json({ message: "Error saving exam result" });
    }
};

exports.getResults = async (req, res) => {
    try {
        const results = await Result.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching results" });
    }
};