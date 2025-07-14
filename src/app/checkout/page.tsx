'use client';
import { useCart } from '../context/CartContext';
import '../checkout/checkout.css';

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
    <h1 className='title'>Checkout</h1>
    <div className='layout-container'>
      
        <div className='container'>
            {cart.length === 0 ? (
            <p>Your cart is empty.</p>
                ) : (
            <div className='container2'>
            
                {cart.map((item) => (
                <div key={item.title}>
              <img 
              src={item.image}
              alt={item.title} 
              width={100} 
              />
              <h3>{item.title}</h3>
              <p>Price: {item.price}¥</p>
              
                {/*Right section of checkout items */}
                <div className='quantity-subtotal-remove'>
                
                {/* Quantity Buttons */}
                <div className='quantity'>
                    <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.category)}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.category)}>+</button>
                </div>
                
              
              
                    <p>Subtotal: {(item.price * item.quantity)}¥</p>
                    <button onClick={() => removeFromCart(item.id, item.category)}>Remove</button>
                    </div>
            </div>
          ))}
        </div>
      )}
        </div>
            <div className='total-price'>
            <h2>Total: {getTotal()}¥</h2>
          </div>
    </div>
    </div>
  );
}
