'use client'
import {useState, useEffect} from 'react';
import '../reviews/Reviews.css';


type Reviews = {
    id: number;
    rating: string;
    description: string;
    customer: string;
    image: string;
}


export default function Reviews(){
    const [reviews, setReviews] = useState<Reviews[]>([]);

    useEffect(() => {
        fetch('api/reviews')
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Failed to fetch reviews", err))
    }, []);



    return (
        <div>
            <h1 className='title'>Customer Reviews</h1>
            <div className='reviews flex justify-center flex-col items-center px-4'>
                {reviews.map((review) => {
                    return (
                        <div
                        key={review.id}
                        id='customer-info'
                        className='flex rounded-[10px] w-[75%] justify-between'
                        >
                        <div className='flex-col w-1/2'>
                            
                            <div className='flex'>
                                {review.rating.map((star: string, index: number) => (
                                    <img
                                    key={index}
                                    src={star}
                                    className='w-5 h-5 mr-1 p-1.5'
                                    />
                                ))}
                            </div>

                            <p>{review.description}</p>
                            <h2>{review.customer}</h2>
                        </div>
                        <div className="flex-end">
                            <img 
                            src={review.image}
                            className='w-52 h-52 rounded-full'
                            />
                        </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}