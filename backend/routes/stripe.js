const stripe = require('stripe')(process.env.STRIPE_SECRET);
router.post('/create-payment-intent', authMiddleware, async (req, res) => {
  const { amount } = req.body; // From cart total
  const paymentIntent = await stripe.paymentIntents.create({ amount: amount * 100, currency: 'usd' });
  res.json({ clientSecret: paymentIntent.client_secret });
});
