'use client'
import React from "react";
import { useState, useEffect } from 'react';
import "../styles/MenuItems.css";

type Stimulants = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

type CartItem = Stimulants & { quantity: number };

export default function Stimulants(){
    const [stimulants, setStimulants] = useState<Stimulants[]>([]);
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        fetch('api/healing')
        .then((res) => res.json())
        .then((data) => setStimulants(data))
        .catch((err) => console.error("Failed to fetch stimulants", err))
    }, []);

    function addToCart(stimulant: Stimulants) {
        setCart((prev) => [...prev, {...stimulant, quantity: 1}])
    }

    function updateQuantity(id: number, change: number){
    setCart((prev) => prev.map((item) => item.id === id ?
    {...item, quantity: Math.max(1, item.quantity + change)} 
    : item
    ).filter((item) => item.quantity > 0));
    }

    return (
        <div>
            <h1 className='title'>Stimulants</h1>
            <div className="display">
        {stimulants.map((stimulant) => (
          <div key={stimulant.id} className='display-items'>
            <img src={stimulant.image} alt={stimulant.title} width={200} />
            <h2>{stimulant.title}</h2>
            <p>{stimulant.price}¥</p>
            <p>{stimulant.description}</p>

              {cart.find((item) => item.id === stimulant.id) ? (
              <div>
                <button className="btn-style" onClick={() => updateQuantity(stimulant.id, -1)}>-</button>
                <span style={{ margin: '0 8px' }}>
                  {cart.find((item) => item.id === stimulant.id)?.quantity}
                </span>
                <button className="btn-style" onClick={() => updateQuantity(stimulant.id, 1)}>+</button>
              </div>) : (<button className='btn-style' onClick={() => addToCart(stimulant)}>Add to Cart</button>)}

          </div>
        ))}
      </div>
        </div>
    )
}