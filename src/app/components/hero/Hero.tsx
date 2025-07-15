'use client'

import { useState, useEffect } from 'react';

const images = [
    '/Images/poppo_hero_image.jpg',
    '/Images/poppo_hero_image2.jpg'
];

export default function Hero(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        },4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[500px] w-full overflow-hidden">
            <img
            src={images[currentIndex]}
            alt="Hero Image"
            className={`absolute h-full w-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            key={images[currentIndex]}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            
            </div>
        </div>
    )
}