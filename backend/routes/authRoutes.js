const express = require('express');
const jwt = require('jsonwebtoken');
const supabase = require('../lib/supabaseServer');
const User = require('../models/user.models');
const router = express.Router();

// Verify Supabase JWT and create local session
router.post('/supabase-auth', async (req, res) => {
  try {
    const { access_token } = req.body;
    
    // Verify Supabase token
    const { data: { user }, error } = await supabase.auth.getUser(access_token);
    if (error) throw new Error('Invalid Supabase token');

    // Create or update user in MongoDB
    const mongoUser = await User.findOneAndUpdate(
      { email: user.email },
      {
        $setOnInsert: {
          username: user.email.split('@')[0],
          email: user.email,
          createdAt: new Date()
        }
      },
      { upsert: true, new: true }
    );

    // Create your own JWT
    const token = jwt.sign(
      { userId: mongoUser._id },
      process.env.VITE_JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        _id: mongoUser._id,
        email: mongoUser.email,
        username: mongoUser.username
      }
    });

  } catch (error) {
    console.error('Supabase auth error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

// Protected route example
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    // Verify your JWT (not Supabase's)
    const decoded = jwt.verify(token, process.env.VITE_JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json({
      _id: user._id,
      email: user.email,
      username: user.username,
      addresses: user.addresses
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;