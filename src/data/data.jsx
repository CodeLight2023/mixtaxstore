import hero from './../assets/hero.png'
import heroImg from './../assets/img/heroImg.png'
import tshirt_1 from './../assets/img/tshirt_1.webp'
import tshirt_2 from './../assets/img/tshirt_2.png'
import canvas from './../assets/img/canvas.png'
import handbag from './../assets/img/handbag.jpg'
import handbag_2 from './../assets/img/handbag_2.jpg'
import heel_1 from './../assets/img/heel_1.jpg'
import samsung from './../assets/img/Samsung.webp'
import empty from './../assets/img/empty.png'
import InConstruction from './../assets/img/inConstructionWBg.png'
export const menuList = [
    {
        id: crypto.randomUUID(),
        title: 'Home',
        link: '/',
    },
    {
        id: crypto.randomUUID(),
        title: 'Shop',
        link: '/shop',
    },
    {
        id: crypto.randomUUID(),
        title: 'Blog',
        link: '/blog',
    },
    {
        id: crypto.randomUUID(),
        title: 'Contact Us',
        link: '/contact',
    },
]
export const products = [
    {
        id: 1,
        name: 'Tshirt',
        category: 'Fashion',
        description: 'A comfortable and stylish t-shirt',
        price: 5000,
        image: tshirt_1,
    },
    {
        id: 2,
        name: 'Tshirt',
        category: 'Fashion',
        description: 'A comfortable and stylish t-shirt',
        price: 7000,
        image: tshirt_2,
    },
    {
        id: 3,
        name: 'Canvas',
        category: 'Footwear',
        description: 'A high grade canvas',
        price: 30000,
        image: canvas,
    },
    {
        id: 4,
        name: 'HandBag',
        category: 'Accessories',
        description: 'A high grade Handbag',
        price: 50000,
        image: handbag,
    },
    {
        id: 5,
        name: 'HandBag',
        category: 'Accessories',
        description: 'A high grade Handbag',
        price: 40000,
        image: handbag_2,
    },
    {
        id: 6,
        name: 'High Heels',
        category: 'Footwear',
        description: 'A high grade Red High Heels',
        price: 20000,
        image: heel_1,
    },
    {
        id: 7,
        name: 'SamSung S9+',
        category: 'Electronics',
        description: '8GB RAM, 128GB storage',
        price: 215000,
        image: samsung,
    },
]



export const assets = {
    hero,
    heroImg,
    samsung,
    tshirt_1,
    tshirt_2,
    handbag,
    handbag_2,
    canvas,
    heel_1,
    empty,
    InConstruction,
}