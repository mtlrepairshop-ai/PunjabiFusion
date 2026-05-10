// client/src/stripeClient.js
import { loadStripe } from '@stripe/stripe-js';

// Create a singleton promise to avoid multiple loadStripe calls
let _stripePromise;

const getStripe = () => {
  if (!_stripePromise) {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      console.error('❌ VITE_STRIPE_PUBLISHABLE_KEY is not defined');
      return null;
    }
    
    _stripePromise = loadStripe(publishableKey);
    
    // Add error handling for Stripe loading
    _stripePromise.catch((error) => {
      console.error('❌ Failed to load Stripe:', error);
      _stripePromise = null; // Reset to allow retry
    });
  }
  
  return _stripePromise;
};

export const stripePromise = getStripe();
export { getStripe };