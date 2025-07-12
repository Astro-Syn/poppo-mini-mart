'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children} : {children: ReactNode }){
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if(existing) {
                return prev.map((i) => 
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
            }
            return [...prev, item];
        });
    };

    const updateQuantity = (id: number, quantity: number) => {
  setCart((prev) =>
    quantity < 1
      ? prev.filter((item) => item.id !== id)
      : prev.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
  );
};

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
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