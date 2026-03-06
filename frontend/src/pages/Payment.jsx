// Use @stripe/react-stripe-js, Elements, PaymentElement on clientSecret from backend
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_...');
const Payment = ({ total }) => {
  // Create intent, then <PaymentElement />, confirmPayment → redirect /thankyou
};
