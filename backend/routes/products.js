router.post('/create-payment-intent', authMiddleware, (req, res) => {
  const { amount } = req.body;
  // Fake success response
  res.json({ 
    clientSecret: 'fake_success_token', 
    success: true,
    message: `Payment of $${amount} processed successfully!`
  });
});
