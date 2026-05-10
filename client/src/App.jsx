import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MenuSection from './Components/MenuSection';
import EventsSection from './Components/EventsSection';
import AboutSection from './Components/AboutSection';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import FooterCopyright from './Components/FooterCopyright';
import WhyChooseUs from './Components/WhyChooseUs';

// Import menuItems data
import { menuItems } from './Components/MenuSection';

// Lazy load the Cart component as it's only shown when needed
const Cart = lazy(() => import('./Components/Cart'));

// Import AOS dynamically to reduce initial bundle size
let AOS;
const loadAOS = async () => {
  if (!AOS) {
    const aosModule = await import('aos');
    AOS = aosModule.default;
    // Import CSS dynamically
    await import('aos/dist/aos.css');
  }
  return AOS;
};

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { loadCloverSDK } from './cloverClient';

// Loading component for Cart
const CartLoading = () => (
  <div className="d-flex justify-content-center align-items-center p-4">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage if available
    try {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error);
      return [];
    }
  });

  const [showCart, setShowCart] = useState(false);
  const [paymentReady, setPaymentReady] = useState(false);
  const [aosLoaded, setAosLoaded] = useState(false);

  // Preload Clover SDK
  useEffect(() => {
    loadCloverSDK()
      .then(() => {
        setPaymentReady(true);
        console.log("✅ Clover SDK preloaded successfully");
      })
      .catch((error) => {
        console.error("❌ Failed to preload Clover SDK:", error);
        setPaymentReady(false);
      });
  }, []);

  // Initialize AOS with dynamic loading
  useEffect(() => {
    const initAOS = async () => {
      try {
        const aos = await loadAOS();
        aos.init({
          duration: 600,
          once: true, // Only animate once for better performance
          offset: 50,
          disable: 'mobile' // Disable on mobile for better performance
        });
        setAosLoaded(true);
        console.log("✅ AOS initialized");
      } catch (error) {
        console.error("❌ Failed to initialize AOS:", error);
      }
    };

    initAOS();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }, [cartItems]);

  // Optimized cart operations with useCallback to prevent unnecessary re-renders
  const handleAddToCart = useCallback((item) => {
    const cleanItem = {
      title: item.title,
      price: item.price,
      ingredients: item.ingredients
    };

    setCartItems(prev => {
      const existingItem = prev.find(i => i.title === cleanItem.title);

      if (existingItem) {
        return prev.map(i =>
          i.title === item.title
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...cleanItem, quantity: 1 }];
    });
  }, []);

  const toggleCart = useCallback(() => {
    setShowCart(prev => !prev);
  }, []);

  const closeCart = useCallback(() => {
    setShowCart(false);
  }, []);

  // Memoize cart total for Header component
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  // Add keyboard shortcut to close cart (ESC key)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && showCart) {
        closeCart();
      }
    };

    if (showCart) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when cart is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showCart, closeCart]);

  return (
    <>
      <Header
        cartItems={cartItems}
        cartTotal={cartTotal}
        onCartClick={toggleCart}
        onAddToCart={handleAddToCart}
        menuItems={menuItems}
        paymentReady={paymentReady}
      />

      <HeroSection />

      <MenuSection
        onAddToCart={handleAddToCart}
        paymentReady={paymentReady}
      />

      <EventsSection />
      <Testimonials />
      <AboutSection />
      <WhyChooseUs />
      <Contact />
      <FooterCopyright />

      {/* Cart Sidebar with backdrop */}
      {showCart && (
        <div
          className="cart-backdrop"
          onClick={closeCart}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}

      <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
          <h5 className="mb-0">Your Cart ({cartTotal})</h5>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <Suspense fallback={<CartLoading />}>
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            paymentReady={paymentReady}
          />
        </Suspense>
      </div>

      {/* Add some global loading state indicators */}
      {!paymentReady && (
        <div
          className="position-fixed bottom-0 end-0 m-3 p-2 bg-warning rounded"
          style={{ zIndex: 1000, fontSize: '0.8rem' }}
        >
          Loading payment system...
        </div>
      )}

    </>
  );
}

export default App;
