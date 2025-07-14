import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse){
    const reviews = [
        {
            id: 1,
            rating: [
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png"
            ],
            description: "Sometimes I stop in here after a good fight and buy some stimulants to take the edge off. Place really knows how to cater to a guy who’s been swinging bats all night. Bonus points: great view of my beloved Kiryu-chan whenever he drops in. 10/10, would loiter outside again.",
            customer: "Goro Majima",
            image: 'Images/customer_goro.jpg'
        },
        {
            id: 2,
            rating: [
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png"
            ],
            description: "I like to stop in here from time to time. The staff is always polite, the food’s solid. Perfect for a quiet snack between... incidents.",
            customer: "Kiryu Kazama",
            image: "Images/customer_kiryu.jpg"

        },
        {
            id: 3,
            rating: [
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png"
            ],
            description: "I work late hours chasing down criminals, so this place is a godsend. Reliable food, good coffee, and open when the rest of the world is asleep. If I ever catch a break, you’ll find me here — chewing quietly in peace.",
            customer: "Detective Makoto Date",
            image: "Images/customer_date.jpg"

        },
        {
            id: 4,
            rating: [
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png"
            ],
            description: "Their ramen is legit. I'm talking rich broth, perfect noodles — the works. It’s just up the street from my club, so I sneak out sometimes for a real meal before diving back into the chaos. Honestly, it’s the highlight of my shift.",
            customer: "Yuya",
            image: "Images/customer_yuya.jpg"

        },
        {
            id: 5,
            rating: [
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png",
                "Images/star_pink.png"
            ],
            description: "I love this place! I get pets, snacks, and sometimes they even open the fridge just for me. Humans are weird, but the ones here are nice. 11/10 convenience.",
            customer: "Pochitaro (woof)",
            image: "Images/customer_pochitaro.jpg"
        }
    ];

    res.status(200).json(reviews);
}