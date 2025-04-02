require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.models');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.VITE_SUPABASE_URL);
    
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (adminExists) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    const admin = new User({
      email: process.env.ADMIN_EMAIL,
      password: await bcrypt.hash(process.env.ADMIN_INITIAL_PASSWORD, 12),
      role: 'admin',
      isVerified: true,
      username: 'Devansh'
    });

    await admin.save();
    console.log('✅ Admin user created successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to create admin:', err);
    process.exit(1);
  }
};

createAdmin();