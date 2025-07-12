'use client';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <img src={item.image} alt={item.title} width={100} />
              <h3>{item.title}</h3>
              <p>Price: {item.price}¥</p>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Subtotal: {(item.price * item.quantity)}¥</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: {getTotal()}¥</h2>
        </div>
      )}
    </div>
  );
}
