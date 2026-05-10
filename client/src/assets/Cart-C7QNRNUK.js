import { r as F, j as J } from "./index-CA_pO7OM.js";
const e = J.jsx, r = J.jsxs, D = J.Fragment;
const { useState: h, useRef: j, useEffect: z } = F, L = "85cf68003c271b32ac77b7cc0e3622cf", O = "https://checkout.clover.com/sdk.js", _ = "https://pfgrill-clover-backend.onrender.com";
let w = null;
function q() {
  return w || (w = new Promise((t, l) => {
    if (window.Clover) {
      t(window.Clover);
      return;
    }
    const i = document.createElement("script");
    i.src = O, i.async = !0, i.onload = () => {
      let attempts = 0;
      const check = () => {
        if (window.Clover) { t(window.Clover); return; }
        if (++attempts < 50) { setTimeout(check, 100); return; }
        l(new Error("Clover SDK failed to initialize"));
      };
      check();
    }, i.onerror = () => l(new Error("Failed to load Clover SDK")), document.head.appendChild(i);
  }), w);
}
const A = ({ cartItems: t, cartTotal: l, onClose: i, onSuccess: p }) => {
  const [d, b] = h(!1), [N, f] = h(null), [g, y] = h(null), [k, C] = h(!1), [a, o] = h(""), n = j(!1);
  z(() => ((async () => {
    try {
      await q();
      const c = new window.Clover(L), m = c.elements(), u = {
        body: { fontFamily: "Roboto, sans-serif", fontSize: "16px", color: "#333" },
        input: { fontSize: "16px", padding: "10px" }
      }, S = m.create("CARD_NUMBER", { style: u }), E = m.create("CARD_DATE", { style: u }), P = m.create("CARD_CVV", { style: u }), R = m.create("CARD_POSTAL_CODE", { style: u });
      S.mount("#card-number"), E.mount("#card-date"), P.mount("#card-cvv"), R.mount("#card-postal");
      y(c), C(!0), n.current = !0;
    } catch (c) {
      console.error("Failed to initialize Clover:", c), f("Failed to load payment form. Please refresh and try again.");
    }
  })(), () => {
    n.current = !1;
  }), []);
  const $ = async (s) => {
    if (s.preventDefault(), !(d || !g)) {
      b(!0), f(null);
      try {
        const c = await g.createToken();
        if (c.errors)
          throw new Error(Object.values(c.errors).join(", ") || "Invalid card details");
        if (!c.token) throw new Error("Failed to tokenize card. Please try again.");
        const m = await fetch(`${_}/create-charge`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: c.token,
            amount: parseFloat(l),
            description: `PF Grill Order - ${t.length} item(s)`,
            email: a || void 0
          })
        }), u = await m.json();
        if (!m.ok) throw new Error(u.error || "Payment failed. Please try again.");
        p(u);
      } catch (c) {
        console.error("Payment error:", c), f(c.message || "Payment failed. Please try again.");
      } finally {
        n.current && b(!1);
      }
    }
  };
  return r("div", { className: "checkout-overlay", children: [
    r("div", { className: "checkout-modal", children: [
      r("div", { className: "checkout-header", children: [
        e("h5", { children: "Secure Checkout" }),
        e("button", { className: "btn-close", onClick: i, disabled: d, "aria-label": "Close" })
      ] }),
      r("div", { className: "order-summary-section", children: [
        e("h6", { children: "Order Summary" }),
        t.map(
          (s) => r("div", { className: "order-item", children: [
            e("span", { children: `${s.title} x${s.quantity}` }),
            e("span", { children: `$${(parseFloat(s.price.replace("$", "")) * s.quantity).toFixed(2)}` })
          ] }, s.title)
        ),
        r("div", { className: "order-total", children: [
          e("strong", { children: "Total" }),
          e("strong", { children: `$${l}` })
        ] })
      ] }),
      r("form", { onSubmit: $, children: [
        r("div", { className: "mb-3", children: [
          e("label", { className: "form-label", children: "Email (for receipt)" }),
          e("input", { type: "email", className: "form-control", placeholder: "your@email.com", value: a, onChange: (s) => o(s.target.value) })
        ] }),
        r("div", { className: "mb-3", children: [
          e("label", { className: "form-label", children: "Card Number" }),
          e("div", { id: "card-number", className: "clover-field" })
        ] }),
        r("div", { className: "row mb-3", children: [
          r("div", { className: "col-6", children: [
            e("label", { className: "form-label", children: "Expiry" }),
            e("div", { id: "card-date", className: "clover-field" })
          ] }),
          r("div", { className: "col-6", children: [
            e("label", { className: "form-label", children: "CVV" }),
            e("div", { id: "card-cvv", className: "clover-field" })
          ] })
        ] }),
        r("div", { className: "mb-3", children: [
          e("label", { className: "form-label", children: "Postal Code" }),
          e("div", { id: "card-postal", className: "clover-field" })
        ] }),
        N && r("div", { className: "alert alert-danger py-2 mb-3", role: "alert", children: [
          e("i", { className: "bi bi-exclamation-triangle-fill me-2" }),
          N
        ] }),
        e("button", {
          type: "submit",
          className: "btn btn-primary w-100 py-2",
          disabled: d || !k,
          children: d ? r(D, { children: [
            e("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }),
            "Processing..."
          ] }) : r(D, { children: [
            e("i", { className: "bi bi-lock-fill me-2" }),
            `Pay $${l}`
          ] })
        }),
        e("div", {
          className: "text-center mt-2",
          children: r("small", { className: "text-muted", children: [
            e("i", { className: "bi bi-shield-check me-1" }),
            "Secure payment powered by Clover"
          ] })
        })
      ] })
    ] }),
    e("style", { children: `
      .checkout-overlay { position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:2000; display:flex; align-items:center; justify-content:center; padding:1rem; }
      .checkout-modal { background:#fff; border-radius:12px; max-width:480px; width:100%; max-height:90vh; overflow-y:auto; padding:1.5rem; box-shadow:0 10px 40px rgba(0,0,0,0.3); }
      .checkout-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; padding-bottom:0.75rem; border-bottom:1px solid #eee; }
      .checkout-header h5 { margin:0; }
      .order-summary-section { background:#f8f9fa; border-radius:8px; padding:1rem; margin-bottom:1rem; }
      .order-summary-section h6 { margin-bottom:0.5rem; color:#666; font-size:0.85rem; text-transform:uppercase; }
      .order-item { display:flex; justify-content:space-between; padding:0.25rem 0; font-size:0.9rem; }
      .order-total { display:flex; justify-content:space-between; padding-top:0.5rem; margin-top:0.5rem; border-top:1px solid #dee2e6; font-size:1.05rem; }
      .clover-field { border:1px solid #ced4da; border-radius:6px; padding:0; height:44px; overflow:hidden; background:#fff; }
      .clover-field iframe { width:100% !important; height:44px !important; }
      .form-label { font-size:0.875rem; font-weight:500; color:#555; }
    ` })
  ] });
}, T = ({ data: t, onDone: l }) => r("div", { className: "payment-success-overlay", children: [
  e("div", {
    className: "payment-success-modal",
    children: r("div", { className: "text-center py-4", children: [
      e("div", { style: { fontSize: "3rem", color: "#28a745" }, children: e("i", { className: "bi bi-check-circle-fill" }) }),
      e("h4", { className: "mt-3", children: "Payment Successful!" }),
      e("p", { className: "text-muted", children: "Thank you for your order. Your payment has been processed." }),
      (t == null ? void 0 : t.chargeId) && e("p", { className: "small text-muted", children: `Reference: ${t.chargeId}` }),
      e("button", { className: "btn btn-primary mt-3", onClick: l, children: "Done" })
    ] })
  }),
  e("style", { children: `
      .payment-success-overlay { position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.5); z-index:2000; display:flex; align-items:center; justify-content:center; }
      .payment-success-modal { background:#fff; border-radius:12px; padding:2rem; max-width:400px; width:90%; box-shadow:0 10px 40px rgba(0,0,0,0.2); }
    ` })
] }), B = ({ cartItems: t, setCartItems: l }) => {
  const [i, p] = h(!1), [d, b] = h(null), N = (a) => {
    l((o) => o.map((n) => n.title === a ? { ...n, quantity: n.quantity + 1 } : n));
  }, f = (a) => {
    l((o) => o.map((n) => n.title === a ? { ...n, quantity: n.quantity > 1 ? n.quantity - 1 : 1 } : n));
  }, g = (a) => {
    l((o) => o.filter((n) => n.title !== a));
  }, y = t.reduce((a, o) => a + parseFloat(o.price.replace("$", "")) * o.quantity, 0).toFixed(2), k = (a) => {
    p(!1), b(a);
  }, C = () => {
    b(null), l([]);
  };
  return r("div", { className: "cart-container mt-5 container", children: [
    e("h4", { children: "Your Cart" }),
    t.length === 0 ? e("p", { children: "No items in cart." }) : e("div", {
      className: "list-group",
      children: t.map(
        (a) => e("div", {
          className: "list-group-item",
          children: r("div", { className: "row align-items-center", children: [
            r("div", { className: "col-md-6 col-sm-12 mb-2 mb-md-0", children: [
              e("strong", { className: "d-block text-wrap", children: a.title }),
              r("small", { children: [a.price, " × ", a.quantity] })
            ] }),
            e("div", {
              className: "col-md-6 col-sm-12 text-md-end",
              children: r("div", { className: "btn-group", role: "group", children: [
                e("button", { className: "btn btn-sm btn-secondary", onClick: () => f(a.title), children: "-" }),
                e("button", { className: "btn btn-sm btn-secondary", onClick: () => N(a.title), children: "+" }),
                e("button", { className: "btn btn-sm btn-danger", onClick: () => g(a.title), children: "Remove" })
              ] })
            })
          ] })
        }, a.title)
      )
    }),
    r("div", { className: "mt-3 text-end", children: [
      r("h5", { children: ["Total: $", y] }),
      t.length > 0 && r("div", { className: "checkout-section", children: [
        r("button", { className: "btn btn-primary w-100 py-2", onClick: () => p(!0), children: [
          e("i", { className: "bi bi-credit-card me-2" }),
          `Checkout ($${y})`
        ] }),
        e("div", {
          className: "text-center mt-2",
          children: r("small", { className: "text-muted", children: [
            e("i", { className: "bi bi-shield-check me-1" }),
            "Secure payment powered by Clover"
          ] })
        })
      ] })
    ] }),
    i && e(A, { cartItems: t, cartTotal: y, onClose: () => p(!1), onSuccess: k }),
    d && e(T, { data: d, onDone: C })
  ] });
};
export {
  B as default
};
