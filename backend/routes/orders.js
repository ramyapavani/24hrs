const Order = require('../models/Order');
router.get('/history', authMiddleware, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('products.product');
  res.json(orders);
});
module.exports = router;
