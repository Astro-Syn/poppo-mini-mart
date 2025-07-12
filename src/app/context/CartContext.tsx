'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
    id: number;
    category: 'food' | 'drink' | 'stimulant';
    title: string;
    price: number;
    quantity: number;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: number, quantity: number, category: string) => void;
    removeFromCart: (id: number, category: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children} : {children: ReactNode }){
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id && i.category === item.category);
            if(existing) {
                return prev.map((i) => 
                i.id === item.id && i.category === item.category ? { ...i, quantity: i.quantity + item.quantity } : i);
            }
            return [...prev, item];
        });
    };

    const updateQuantity = (id: number, quantity: number, category: string) => {
    setCart((prev) =>
        prev.map((item) => 
        item.id === id && item.category === category ? { ...item, quantity } : item
        ).filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id: number,  category: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id || item.category !== category));
        };

        return (
            <CartContext.Provider
                value={{ cart, addToCart, updateQuantity, removeFromCart }}
            >
                {children}
            </CartContext.Provider>
        );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
}