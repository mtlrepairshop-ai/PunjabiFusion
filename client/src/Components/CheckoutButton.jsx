import React, { useState, useEffect, useRef } from 'react';
import { loadCloverSDK, createCloverInstance } from '../cloverClient';

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const CheckoutButton = ({ cartItems, disabled = false, onCheckoutStart, onCheckoutComplete }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cloverInstance, setCloverInstance] = useState(null);
  const [cardReady, setCardReady] = useState(false);
  const [email, setEmail] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const mountedRef = useRef(true);

  const cartTotal = cartItems
    ? cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
      }, 0).toFixed(2)
    : '0.00';

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  // Initialize Clover when checkout form opens
  useEffect(() => {
    if (!showForm) return;
    let cancelled = false;

    const initClover = async () => {
      try {
        await loadCloverSDK();
        if (cancelled) return;

        const clover = createCloverInstance();
        const elements = clover.elements();
        const style = {
          body: { fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: '#333' },
          input: { fontSize: '16px' },
        };

        const cardNumber = elements.create('CARD_NUMBER', { style });
        const cardDate = elements.create('CARD_DATE', { style });
        const cardCvv = elements.create('CARD_CVV', { style });
        const cardPostalCode = elements.create('CARD_POSTAL_CODE', { style });

        cardNumber.mount('#card-number');
        cardDate.mount('#card-date');
        cardCvv.mount('#card-cvv');
        cardPostalCode.mount('#card-postal');

        if (!cancelled) {
          setCloverInstance(clover);
          setCardReady(true);
        }
      } catch (err) {
        console.error('Failed to initialize Clover:', err);
        if (!cancelled) {
          setError('Failed to load payment form. Please refresh and try again.');
        }
      }
    };

    initClover();
    return () => { cancelled = true; };
  }, [showForm]);

  const handleOpenCheckout = () => {
    if (disabled || !cartItems || cartItems.length === 0) return;
    setShowForm(true);
    setError(null);
    setCardReady(false);
    setCloverInstance(null);
    onCheckoutStart?.();
  };

  const handleClose = () => {
    setShowForm(false);
    setError(null);
    setCardReady(false);
    setCloverInstance(null);
    onCheckoutComplete?.();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !cloverInstance) return;

    setLoading(true);
    setError(null);

    try {
      const result = await cloverInstance.createToken();
      if (result.errors) {
        throw new Error(Object.values(result.errors).join(', ') || 'Invalid card details');
      }
      if (!result.token) {
        throw new Error('Failed to tokenize card. Please try again.');
      }

      const response = await fetch(`${BACKEND_URL}/create-charge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: result.token,
          amount: parseFloat(cartTotal),
          description: `PF Grill Order - ${cartItems.length} item(s)`,
          email: email || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Payment failed. Please try again.');
      }

      console.log('Payment successful:', data.chargeId);
      setShowForm(false);
      setPaymentSuccess(data);
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  };

  const handleSuccessDone = () => {
    setPaymentSuccess(null);
    onCheckoutComplete?.();
  };

  const isButtonDisabled = disabled || !cartItems || cartItems.length === 0;

  return (
    <div className="checkout-section">
      <button
        className="btn btn-primary w-100 py-2"
        onClick={handleOpenCheckout}
        disabled={isButtonDisabled}
      >
        <i className="bi bi-credit-card me-2"></i>
        {!cartItems || cartItems.length === 0
          ? 'Cart is Empty'
          : `Checkout ($${cartTotal})`}
      </button>
      <div className="text-center mt-2">
        <small className="text-muted">
          <i className="bi bi-shield-check me-1"></i>
          Secure payment powered by Clover
        </small>
      </div>

      {/* Checkout Modal */}
      {showForm && (
        <div className="checkout-overlay">
          <div className="checkout-modal">
            <div className="checkout-header">
              <h5 className="mb-0">Secure Checkout</h5>
              <button className="btn-close" onClick={handleClose} disabled={loading} aria-label="Close" />
            </div>

            <div className="order-summary-section">
              <h6>Order Summary</h6>
              {cartItems.map((item) => (
                <div key={item.title} className="order-item">
                  <span>{item.title} x{item.quantity}</span>
                  <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="order-total">
                <strong>Total</strong>
                <strong>${cartTotal}</strong>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email (for receipt)</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <div id="card-number" className="clover-field"></div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label">Expiry</label>
                  <div id="card-date" className="clover-field"></div>
                </div>
                <div className="col-6">
                  <label className="form-label">CVV</label>
                  <div id="card-cvv" className="clover-field"></div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Postal Code</label>
                <div id="card-postal" className="clover-field"></div>
              </div>

              {error && (
                <div className="alert alert-danger py-2 mb-3" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading || !cardReady}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-lock-fill me-2"></i>
                    Pay ${cartTotal}
                  </>
                )}
              </button>

              <div className="text-center mt-2">
                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Secure payment powered by Clover
                </small>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div className="checkout-overlay">
          <div className="checkout-modal text-center py-4">
            <div style={{ fontSize: '3rem', color: '#28a745' }}>
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h4 className="mt-3">Payment Successful!</h4>
            <p className="text-muted">Thank you for your order. Your payment has been processed.</p>
            {paymentSuccess.chargeId && (
              <p className="small text-muted">Reference: {paymentSuccess.chargeId}</p>
            )}
            <button className="btn btn-primary mt-3" onClick={handleSuccessDone}>Done</button>
          </div>
        </div>
      )}

      <style>{`
        .checkout-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .checkout-modal {
          background: #fff;
          border-radius: 12px;
          max-width: 480px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 1.5rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .checkout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #eee;
        }
        .order-summary-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .order-summary-section h6 {
          margin-bottom: 0.5rem;
          color: #666;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .order-item {
          display: flex;
          justify-content: space-between;
          padding: 0.25rem 0;
          font-size: 0.9rem;
        }
        .order-total {
          display: flex;
          justify-content: space-between;
          padding-top: 0.5rem;
          margin-top: 0.5rem;
          border-top: 1px solid #dee2e6;
          font-size: 1.05rem;
        }
        .clover-field {
          border: 1px solid #ced4da;
          border-radius: 6px;
          padding: 0;
          height: 44px;
          overflow: hidden;
          background: #fff;
        }
        .clover-field iframe {
          width: 100% !important;
          height: 44px !important;
        }
        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #555;
        }
        .checkout-section {
          position: sticky;
          bottom: 0;
          background: white;
          padding: 1rem;
          border-top: 1px solid #dee2e6;
          margin: -1rem;
          margin-top: 1rem;
        }
        @media (max-width: 768px) {
          .checkout-section {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutButton;
