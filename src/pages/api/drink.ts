import { NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse ){
    const drinks = [
        {
            id: 1,
            title: "Milk",
            price: 200,
            description: "Fresh milk collected from a dairy farm in the highlands.",
            image: "Images/milk.jpg"
        },
        {
            id: 2,
            title: "Sake",
            price: 1000,
            description: "This large bottle of sake can be enjoyed heated or chilled.",
            image: "Images/sake.jpg"
        }
    ];
    res.status(200).json(drinks);
}