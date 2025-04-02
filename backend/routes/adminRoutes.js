import express from 'express';
import Order from '../models/order.models.js'; 
import Product from '../models/product.models.js'; 
import User from '../models/user.models.js'; 
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

router.use(adminAuth);
router.get('/dashboard', authenticateAdmin, async (req, res) => {
    try {
      const [totalSales, productCount, userCount] = await Promise.all([
        Order.aggregate([
          { 
            $group: { 
              _id: null, 
              total: { $sum: "$totalPrice" } 
            } 
          }
        ]),
        Product.countDocuments(),
        User.countDocuments({ role: 'user' })
      ]);
  
      const salesTotal = totalSales[0]?.total || 0;
  
      res.json({
        salesTotal, 
        productCount,
        userCount
      });
  
    } catch (error) {
      console.error('Dashboard error:', error);
      res.status(500).json({ error: 'Failed to load dashboard data' });
    }
  });