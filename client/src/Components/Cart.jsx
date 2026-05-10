import CheckoutButton from './CheckoutButton';
const Cart = ({ cartItems, setCartItems }) => {
  const increment = (title) => {
    setCartItems(prev =>
      prev.map(item => item.title === title ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decrement = (title) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === title
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (title) => {
    setCartItems(prev => prev.filter(item => item.title !== title));
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0).toFixed(2);

  return (
    <div className="cart-container mt-5 container">
      <h4>Your Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="list-group">
          {cartItems.map(item => (
            <div className="list-group-item" key={item.title}>
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 mb-2 mb-md-0">
                  <strong className="d-block text-wrap">{item.title}</strong>
                  <small>{item.price} × {item.quantity}</small>
                </div>
                <div className="col-md-6 col-sm-12 text-md-end">
                  <div className="btn-group" role="group">
                    <button className="btn btn-sm btn-secondary" onClick={() => decrement(item.title)}>-</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => increment(item.title)}>+</button>
                    <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.title)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    <div className="mt-3 text-end">
  <h5>Total: ${totalPrice}</h5>
  {cartItems.length > 0 && <CheckoutButton cartItems={cartItems} />}
</div>
    </div>
  );
};

export default Cart;
