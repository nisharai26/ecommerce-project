import {useState, useEffect} from 'react';

const data = {
    products: [
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/4/0/10216304/u_10216304.jpg',
            imageAlt: 'Apple Macbook Pro 2020',
            brand: 'Apple',
            model: 'Macbook Pro 2020',
            price: 1152.00,
            description: 'M1, 256 GB SSD, Space Grey'
        },
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/2/5/10208152/u_10208152.jpg',
            imageAlt: 'Acer Swift 3',
            brand: 'Acer',
            model: 'Swift 3',
            price: 599.00,
            description: 'AMD Ryzen 5, 1 TB SSD, Silver'
        },
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/8/9/10219698/u_10219698.jpg',
            imageAlt: 'MSI GE66 Raider',
            brand: 'MSI',
            model: 'GE66 Raider',
            price: 1699.00,
            description: 'i7, RTX 3070, 512 GB SSD'
        },
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/4/0/10216304/u_10216304.jpg',
            imageAlt: 'Apple Macbook Pro 20202020202020202020',
            brand: 'Apple',
            model: 'Macbook Pro 2020',
            price: 1152.00,
            description: 'M1, 256 GB SSD, Space Grey'
        },
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/2/5/10208152/u_10208152.jpg',
            imageAlt: 'Acer Swift 3333333333333333',
            brand: 'Acer',
            model: 'Swift 3',
            price: 599.00,
            description: 'AMD Ryzen 5, 1 TB SSD, Silver'
        },
        {
            category: 'laptops',
            image: 'https://brain-images-ssl.cdn.dixons.com/8/9/10219698/u_10219698.jpg',
            imageAlt: 'MSI GE66 Raiderrrrrrrrrrrrrrr',
            brand: 'MSI',
            model: 'GE66 Raider',
            price: 1699.00,
            description: 'i7, RTX 3070, 512 GB SSD'
        }
    ]
}

export default data;