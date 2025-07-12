import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse){
    const stimulants = [
        {
            id: 1,
            title: "AppStim Half",
            price: 3000,
            description: "Stimulates your digestive tract, slightly lowering your Hunger Gauge.",
            image: "Images/appstim_half.jpg"
        },
        {
            id: 2,
            title: "Staminan Light",
            price: 800,
            description: "Restores health and charges Heat a little.",
            image: "Images/staminan_light.jpg"
        },
        {
            id: 3,
            title: "Toughness Light",
            price: 500,
            description: "Use it to slightly regain health whenever you're in a pinch.",
            image: "Images/toughness_light.jpg"
        },
        {
            id: 4,
            title: "Turmeric Tablets",
            price: 1000,
            description: "Tablets that ease hangovers and help you sober up",
            image: "Images/turmeric_tablets.jpg"
        }
    ];

    res.status(200).json(stimulants);
}