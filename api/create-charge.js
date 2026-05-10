export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const CLOVER_PRIVATE_TOKEN = process.env.CLOVER_PRIVATE_TOKEN;
  const CLOVER_ENV = process.env.CLOVER_ENV || "production";
  const CLOVER_API_BASE =
    CLOVER_ENV === "sandbox"
      ? "https://scl-sandbox.dev.clover.com"
      : "https://scl.clover.com";

  try {
    const { token, amount, description, email } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Payment token is required" });
    }
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Valid amount is required" });
    }

    const amountInCents = Math.round(amount * 100);

    const chargePayload = {
      ecomind: "ecom",
      source: token,
      amount: amountInCents,
      currency: "usd",
      description: description || "Punjabi Fusion Grill - Food Order",
    };

    if (email) {
      chargePayload.receipt_email = email;
    }

    const response = await fetch(`${CLOVER_API_BASE}/v1/charges`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CLOVER_PRIVATE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chargePayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Clover charge failed:", data);
      return res.status(response.status).json({
        error: data.message || data.error?.message || "Payment failed",
        code: data.error?.code,
      });
    }

    console.log("Clover charge successful:", data.id);
    return res.status(200).json({
      success: true,
      chargeId: data.id,
      status: data.status,
      amount: data.amount,
    });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error. Please try again." });
  }
}
