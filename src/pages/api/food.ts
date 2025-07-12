import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const foods = [
        {
            id: 1,
            title: "Imuraya Steamed Bun",
            price: 120,
            description: "A widely loved staple. When you talk about great steamed buns, this is the one.",
            image: 'Images/imuraya_steamed_bun.jpg'
        },
        {
            id: 2,
            title: "Imuraya Bean Paste Bun",
            price: 120,
            description: "A steamed bun stuffed with red bean paste. Despite its small size, it takes a decent effort to eat it all",
            image: 'Images/imuraya_bean_paste_bun.jpg'
        },
        {
            id: 3,
            title: "Imuraya Pizza Bun",
            price: 120,
            description: "A pizza bun containing three types of cheese as well as delicious tomato.", 
            image: 'Images/imuraya_pizza_bun.jpg'
        },
        {
            id: 4, 
            title: "Imuraya Curry Bun",
            price: 120,
            description: "A curry bun with a deep and exquisite spice that really brings out the textures of the ingredients.", 
            image: 'Images/imuraya_curry_bun.jpg'
        },
        {
            id: 5, 
            title: "Imuraya Tokan",
            price: 72,
            description: "A carefully crafted hard jelly made with Hokkaido red bean.", 
            image: 'Images/imuraya_tokan.jpg'
        },
        {
            id: 6,
            title: "Imuraya Castella",
            price: 306,
            description: 'Delectable castella baked thoroughly on a wooden frame. Uses an amber-like syrup called "mochi kome ame" as well a lot of eggs.', 
            image: "Images/imuraya_castella.jpg"
        },
        {
            id: 7, 
            title: "Azuki Bar",
            price: 356,
            description: "A best-selling popsicle that uses conventional ingredients to draw out the full flavor of its delicious azuki red beans.", 
            image: "Images/azuki_bar.jpg"
        },
        {
            id: 8,
            title: "Chicken Broth Pho",
            price: 150,
            description: "Delicious yet simplistic pho with and authentic flavor. Also low on calories.",
            image: "Images/chicken_broth_pho.jpg"
        },
        {
            id: 9,
            title: "JAN JAN Sauce Yakisoba",
            price: 180,
            description: "The stylish container says it all. Its sauce, with a whopping total of ten fruits and vegetables, its wholesome and irresistible.", 
            image: "Images/jan_jan_sauce_yakisoba.jpg"
        },
        {
            id: 10,
            title: "Super Cup Extra Large Squid Yakisoba",
            price: 200,
            description: "This unique yakisoba blends a variety of sauces with both pork and fish broth. As a result, its multi-faceted flavor is sour, rich, and delectable.", 
            image: "Images/super_cup_extra_large_squid_yakisoba.jpg"
        },
        {
            id: 11,
            title: "Soup Cup Soy Sauce Chicken Broth",
            price: 200,
            description: "This cup ramen combines firm noodles and a hearty, comforting soy sauce broth with savory pork chashu. It's an instant noodle fit for a king!", 
            image: "Images/soup_cup_soy_sauce_chicken_broth.jpg"
        },
        {
            id: 12,
            title: "Wonton Harusame",
            price: 150,
            description: "These smooth glass noodles are specifically made for this particular soup, which is comprised of both mung bean strach and potato scrach.", 
            image: "Images/wonton_harusame.jpg"
        },
        {
            id: 13, 
            title: "Seaweed Onigiri",
            price: 120,
            description: "A rice ball with boiled seaweed at its center", 
            image: "Images/seaweed_onigiri.jpg"
        },
        {
            id: 14, 
            title: "Salmon Onigiri",
            price: 120,
            description: "This classic rice ball has a moist salmon flake filling.", 
            image: "Images/salmon_onigiri.jpg"
        },
        {
            id: 15, 
            title: "Tuna Onigiri",
            price: 120,
            description: "This rice ball has tuna tossed with mayonnaise at its center.", 
            image: "Images/tuna_onigiri.jpg"
        },
        {
            id: 16,
            title: "Frankfurter",
            price: 400,
            description: "An authentic German sausage, skewered on a stick for your convenience.",
            image: "Images/frankfurter.jpg"
        },
        {
            id: 17,
            title: "Handmade Cookies",
            price: 1000,
            description: "Simple handmade cookies, wrapped delicately for your convenience.", 
            image: "Images/handmade_cookies.jpg"
        },
        {
            id: 18,
            title: "Oden White",
            price: 500,
            description: "A hearty stew packed with more than enough assorted goodies to satisfy your hunger." ,
            image: "Images/oden_white.jpg"
        },
        {
            id: 19,
            title: "Spaghetti with Meat Sauce",
            price: 800,
            description: "A meaty spaghetti doused in savory tomato sauce.",
            image: "Images/spaghetti_with_meat_sauce.jpg"
        },
        {
            id: 20,
            title: "Bento Lunch Set",
            price: 550,
            description: "Just your average, everyday bento box. It's enough to fill you up for a while.",
            image: "Images/bento_lunch_set.jpg"
        },
        {
            id: 21,
            title: "Pork Tonkatsu Bento",
            price: 600,
            description: "This tonkatsu lunch set is made with rich Satsuma pork.",
            image: "Images/pork_tonkatsu_bento.jpg"
        },
        {
            id: 22,
            title: "Special Yakisoba",
            price: 400,
            description: "Yakisoba with cabbage and pork, the smell of the sauce is simply irresistible.",
            image: "Images/special_yakisoba.jpg"
        },
        {
            id: 23,
            title: "Sushi Set",
            price: 1500,
            description: "A sushi set filled with a popular selection of nigiri.",
            image: "Images/sushi_set.jpg"
        },
        {
            id: 24,
            title: "Luxury Yakiniku Bento",
            price: 1000,
            description: "A luxurious yakiniku bento that lavishly lays on the kalbi.",
            image: "Images/luxury_yakiniku_bento.jpg"
        },
        {
            id: 25,
            title: "Tuna & Egg Sandwich",
            price: 280,
            description: "This sandwich features an egg-mayo mix with tuna on white bread.", 
            image: "/Images/tuna_and_egg_sandwich.jpg"
        },
        {
            id: 26,
            title: "Pork Katsu Sandwich",
            price: 450,
            description: "A sandwich filled with soft, deep-fried pork fillets.",
            image: "Images/pork_katsu_sandwich.jpg"
        },
        {
            id: 27,
            title: "Club Sandwich",
            price: 500,
            description: "A standard clubhouse sandwich with tomatoes, lettuce, and cheese.",
            image: "Images/club_sandwich.jpg"
        },
        {
            id: 28,
            title: "Salt Shaker",
            price: 350,
            description: "A salt shaker that can be found in any household. It's designed so that salt can easily come out in just one shake.",
            image: "Images/salt_shaker.jpg"
        }

    ];

    res.status(200).json(foods);
}