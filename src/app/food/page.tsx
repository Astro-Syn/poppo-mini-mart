'use client'
import { useState, useEffect} from 'react';
import { useCart } from '../context/CartContext';
import "../styles/MenuItems.css";
import "../food/Food.css";
import { motion } from 'framer-motion';

type Foods = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
};


export default function Food(){
    const [foods, setFoods] = useState<Foods[]>([]);
    const [visibleCount, setVisibleCount] = useState(10);

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
        {foods.slice(0, visibleCount).map((food) => {
          const cartItem = cart.find((item) => item.id === food.id && item.category === 'food')
    
          return(
                <motion.div key={food.id} 
                className='display-items'
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                >
                <img src={food.image} alt={food.title} width={200} />
                <h2 className='product-name'>{food.title}</h2>
                <p className='text-pink-600 flex justify-center font-medium'>{food.price}¥</p>
                <p>{food.description}</p>

             

              {cartItem ? (
                <div>
                  <button
                  className="btn-style"
                  onClick={() => updateQuantity(food.id, cartItem.quantity -1, 'food')}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                  className='btn-style'
                  onClick={() => updateQuantity(food.id, cartItem.quantity +1, 'food')}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                className='btn-style'
                onClick={() => addToCart({...food, quantity: 1, category: 'food'})}
                >
                  Add to Cart
                </button>
              )}
          </motion.div>

          
        );
      })}
      </div>
            

       {/*Load more button */}
              {visibleCount < foods.length && (
                <div>
                  <button 
                  className='load-more-btn'
                  onClick={() => setVisibleCount(prev => prev + 20)}
                  >
                    Load more
                  </button>
                </div>
              )}
    </div>
    );
}