const adminAuth = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'Admin privileges required',
        code: 'ADMIN_ACCESS_DENIED' 
      });
    }
    next();
  };
  
  module.exports = adminAuth;