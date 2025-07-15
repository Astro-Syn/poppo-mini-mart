'use client'
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import "../styles/MenuItems.css";
import { motion } from 'framer-motion';

type Stimulants = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export default function Stimulants(){
    const [stimulants, setStimulants] = useState<Stimulants[]>([]);
    const { cart, addToCart, updateQuantity } = useCart();

    useEffect(() => {
        fetch('api/healing')
        .then((res) => res.json())
        .then((data) => setStimulants(data))
        .catch((err) => console.error("Failed to fetch stimulants", err))
    }, []);


    return (
        <div>
            <h1 className='title'>Stimulants</h1>
            <div className="display">
              {stimulants.map((stimulant) => {
                const cartItem = cart.find((item) => item.id === stimulant.id && item.category === 'stimulant')

              return (
                <motion.div key={stimulant.id}
                className='display-items'
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                >
                <img src={stimulant.image} alt={stimulant.title} width={200} />
                <h2 className='product-name'>{stimulant.title}</h2>
                <p>{stimulant.price}¥</p>
                <p>{stimulant.description}</p>

              {cartItem ? (
              <div>
                <button className="btn-style" 
                onClick={() => updateQuantity(stimulant.id, cartItem.quantity -1, 'stimulant')}
                >
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button 
                className="btn-style" 
                onClick={() => updateQuantity(stimulant.id, cartItem.quantity +1, 'stimulant')}
                >
                +
                </button>
              </div>
            ) : (
            <button 
            className='btn-style' 
            onClick={() => addToCart({...stimulant, quantity: 1, category: 'stimulant'})}
            >
              Add to Cart
            </button>
          )}
        </motion.div>
        );
      })}
      </div>
    </div>
    );
}