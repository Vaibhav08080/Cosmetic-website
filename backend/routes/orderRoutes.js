const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, products, shippingAddress } = req.body;
    if (!userId || !products || !shippingAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const order = new Order({ user: userId, products, shippingAddress });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json({ status: order.status, trackingId: order.trackingId, courierService: order.courierService });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:orderId/status', async (req, res) => {
  try {
    const { status, trackingId, courierService } = req.body;
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = status || order.status;
    order.trackingId = trackingId || order.trackingId;
    order.courierService = courierService || order.courierService;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
