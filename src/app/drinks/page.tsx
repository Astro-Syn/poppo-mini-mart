'use client'
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import "../styles/MenuItems.css";

type Drinks = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export default function Drinks(){
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    
    const {cart, addToCart, updateQuantity } = useCart();

    useEffect(() => {
        fetch('/api/drink')
        .then((res) => res.json())
        .then((data) => setDrinks(data))
        .catch((err) => console.error("Failed to fetch drinks", err))

    }, []);


    return (
        <div>
            <h1 className='title'>Drinks</h1>
            <div className='display'>
                {drinks.map((drink) => {
                    const cartItem = cart.find((item) => item.id === drink.id)

                    return (
                        <div key={drink.id} className="display-items">
                        <img src={drink.image} alt={drink.title} width={200} />
                        <h2>{drink.title}</h2>
                        <p>{drink.price}¥</p>
                        <p>{drink.description}</p>

                        {cartItem ? (
                            <div>
                                <button
                                className="btn-style"
                                onClick={() => updateQuantity(drink.id, cartItem.quantity -1, 'drink')}
                                >
                                    -
                                </button>
                                <span>{cartItem.quantity}</span>
                                <button
                                className='btn-style'
                                onClick={() => updateQuantity(drink.id, cartItem.quantity +1, 'drink')}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button
                            className='btn-style'
                            onClick={() => addToCart({...drink, quantity: 1, category: 'drink'})}
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