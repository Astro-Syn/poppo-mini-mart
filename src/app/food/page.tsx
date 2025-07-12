'use client'
import { useState, useEffect} from 'react';
import { useCart } from '../context/CartContext';
import "../styles/MenuItems.css";

type Foods = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
};


export default function Food(){
    const [foods, setFoods] = useState<Foods[]>([]);
   
    const {cart, addToCart, updateQuantity }= useCart();


useEffect(() => {
    fetch('/api/food')
    .then((res) => res.json())
    .then((data) => setFoods(data))
    .catch((err) => console.error(`Failed to fetch foods:`, err))
}, []);


    return (
    <div>
      <h1 className="title">Food</h1>
      <div className="display">
        {foods.map((food) => {
          const cartItem = cart.find((item) => item.id === food.id)
        

          return(
              <div key={food.id} className='display-items'>
                <img src={food.image} alt={food.title} width={200} />
                <h2>{food.title}</h2>
                <p>{food.price}¥</p>
                <p>{food.description}</p>
          )
          

              {cartItem ? (
                <div>
                  <button
                  className="btn-style"
                  onClick={() => updateQuantity(food.id, cartItem.quantity -1)}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                  className='btn-style'
                  onClick={() => updateQuantity(food)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                className='btn-style'
                onClick={() => addToCart({...food, quantity: 1})}
                >
                  Add to Cart
                </button>
              )}
          </div>
        );
      })}
      </div>
    </div>
    );
}