'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/MenuItems.css";

type Drinks = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

type CartItem = Drinks & {quantity: number};

export default function Drinks(){
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        fetch('/api/drink')
        .then((res) => res.json())
        .then((data) => setDrinks(data))
        .catch((err) => console.error("Failed to fetch drinks", err))

    }, []);

    function addToCart(drink: Drinks) {
        setCart((prev) => [...prev, {...drink, quantity: 1}])
    }

    function updateQuantity(id: number, change: number){
        setCart((prev) => prev.map((item) => item.id === id ? 
        {...item, quantity: Math.max(1, item.quantity + change)}
    : item
    ).filter((item) => item.quantity > 0));
    }

    function getTotalPrice() {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    return (
        <div>
            <h1 className='title'>Drinks</h1>
            <div className='display'>
                {drinks.map((drink) => (
                    <div key={drink.id} className="display-items">
                        <img src={drink.image} alt={drink.title} width={200} />
                        <h2>{drink.title}</h2>
                        <p>{drink.price}¥</p>
                        <p>{drink.description}</p>

                        {cart.find((item) => item.id === drink.id) ? (
                            <div>
                                <button className="btn-style" onClick={() => updateQuantity(drink.id, -1)}>-</button>
                                <span style={{ margin: '0 8px' }}>
                                {cart.find((item) => item.id === drink.id)?.quantity}
                                </span>
                            <button className="btn-style" onClick={() => updateQuantity(drink.id, 1)}>+</button>
                        </div>) : (<button className='btn-style' onClick={() => addToCart(drink)}>Add to Cart</button>)}
                    </div>
                
                ))}
                <div className='cart'>
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (<p>Your cart is empty</p>) 
                    : (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span>{item.title}</span>
                                <span> - </span>
                                <span>
                                    {item.quantity} x {item.price}¥ = {item.quantity * item.price}¥
                                </span>
                                <button onClick={() => updateQuantity(item.id, -1)} className="btn-style">
                                    -
                                </button>
                                <button onClick={() => updateQuantity(item.id, +1)} className="btn-style">
                                    +
                                </button>
                            </li>
                        ))}
                    </ul>    
                    )}
                    {cart.length > 0 && (
                        <div className='mt-8 text-lg font-semibold'>
                            Total: {getTotalPrice()} ¥
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
    
}