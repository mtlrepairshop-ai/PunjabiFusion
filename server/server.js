import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const CLOVER_PRIVATE_TOKEN = process.env.CLOVER_PRIVATE_TOKEN || "4d7acb77-4472-bbfc-2e99-57e3766d5153";
const CLOVER_ENV = process.env.CLOVER_ENV || "production";
const CLOVER_API_BASE = CLOVER_ENV === "sandbox"
  ? "https://scl-sandbox.dev.clover.com"
  : "https://scl.clover.com";

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://pfgrill.com', 'https://www.pfgrill.com']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'pfgrill-clover-backend' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Create a Clover charge using tokenized card from iframe
app.post('/create-charge', async (req, res) => {
  const startTime = Date.now();

  try {
    const { token, amount, description, email } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Payment token is required' });
    }
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const amountInCents = Math.round(amount * 100);

    const chargePayload = {
      ecomind: 'ecom',
      source: token,
      amount: amountInCents,
      currency: 'usd',
      description: description || 'Punjabi Fusion Grill - Food Order',
    };

    if (email) {
      chargePayload.receipt_email = email;
    }

    const response = await fetch(`${CLOVER_API_BASE}/v1/charges`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CLOVER_PRIVATE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chargePayload),
    });

    const data = await response.json();

    if (!response.ok) {
      const processingTime = Date.now() - startTime;
      console.error(`❌ Clover charge failed after ${processingTime}ms:`, data);
      return res.status(response.status).json({
        error: data.message || data.error?.message || 'Payment failed',
        code: data.error?.code,
      });
    }

    const processingTime = Date.now() - startTime;
    console.log(`✅ Clover charge successful in ${processingTime}ms:`, data.id);
    res.json({
      success: true,
      chargeId: data.id,
      status: data.status,
      amount: data.amount,
    });
  } catch (err) {
    const processingTime = Date.now() - startTime;
    console.error(`❌ Server error after ${processingTime}ms:`, err);
    res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 4242;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

export default app;
