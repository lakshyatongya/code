import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/usermodel.js';

const router = express.Router();
router.post('/signup', async (req, res) => {
  const { Username, Age, Email, password } = req.body;

  try {
    const newUser = new User({ Username, Age, Email, password });
    await newUser.save();
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
router.post('/login', async (req, res) => {
  const { Email, password } = req.body;
  try {
    const user = await User.findOne({ Email }).select('+password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.password !== password) return res.status(400).json({ message: 'Email or password is incorrect' });

    const token = jwt.sign({ id: user._id }, 'lakshyajain', { expiresIn: '1h' })
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
