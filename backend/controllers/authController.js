const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        const exists = await User.findOne({ phone });
        if (exists) return res.status(400).json({ message: "Phone number already registered!" });

        const user = await User.create({ name, phone, password });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        
        res.status(201).json({ token, name: user.name, phone: user.phone });
    } catch (err) {
        res.status(500).json({ message: "Error creating account" });
    }
};

exports.login = async (req, res) => {
    const { phone, password } = req.body;
    const user = await User.findOne({ 
        $or: [{ phone: phone }, { name: phone }] 
    });

    if (user && user.password === password) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.json({ token, name: user.name, phone: user.phone });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};