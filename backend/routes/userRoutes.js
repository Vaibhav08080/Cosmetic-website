const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/:userId/address', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.addresses.push(req.body);
    await user.save();
    res.json(user.addresses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:userId/address', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.addresses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:userId/address/:addressIndex', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.addresses.splice(req.params.addressIndex, 1);
    await user.save();
    res.json(user.addresses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
