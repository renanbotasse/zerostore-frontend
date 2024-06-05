import {
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
} from '@storefront-ui/react';

import masterIcon from '../../assets/mastersystem.png';
import megaIcon from '../../assets/megadrive.png';
import n64Icon from '../../assets/n64icon.png';
import snesIcon from '../../assets/snes.png';
import nesIcon from '../../assets/nes.png';
import psxIcon from '../../assets/psxicon.jpg';
import salesIcon from '../../assets/saleIcon.png';
import faqIcon from '../../assets/FAQ.png';
import contactIcon from '../../assets/CONTACT.png';
import aboutIcon from '../../assets/ABOUT.png';
import newgameIcon from '../../assets/newgameIcon.png';
import homebrewIcon from '../../assets/homebrewIcon.png';
import accessoriesIcon from '../../assets/accessoriesIcon.png';
import ayaneoIcon from '../../assets/ayneoIcon.png';


export const actionItems = [
    {
        icon: <SfIconShoppingCart />,
        label: '',
        ariaLabel: 'Cart',
        role: 'button',
    },
    {
        icon: <SfIconFavorite />,
        label: '',
        ariaLabel: 'Wishlist',
        role: 'button',
    },
    {
        icon: <SfIconPerson />,
        label: 'Log in',
        ariaLabel: 'Log in',
        role: 'login',
    },
];

export const bannerDetails = {
    image: 'https://www.sealzinc.com/cdn/shop/products/B22.png?v=1686134178',
    title: 'AYNEO - One Console to rule them all',
};

export const categoriesContent = [
    {
        heading: 'GAMES',
        items: [
            {
                title: "SUPER NINTENDO",
                icon: snesIcon,
                filterRedux: {
                    product_platform: "SNES",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
            {
                title: 'NINTENDO',
                icon: nesIcon,
                filterRedux: {
                    product_platform: "NES",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
            {
                title: 'GENESIS',
                icon: megaIcon,
                filterRedux: {
                    product_platform: "GENESIS",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
            {
                title: 'MASTER SYSTEM',
                icon: masterIcon,
                filterRedux: {
                    product_platform: "MASTER",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
            {
                title: 'PSX',
                icon: psxIcon,
                filterRedux: {
                    product_platform: "PSX",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
            {
                title: 'N64',
                icon: n64Icon,
                filterRedux: {
                    product_platform: "N64",
                    product_type: 'GAME',
                },
                link: '/filter',
            },
        ],
    },
    {
        heading: 'CONSOLES',
        items: [
            {
                title: "SUPER NINTENDO",
                icon: snesIcon,
                filterRedux: {
                    product_platform: "SNES",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
            {
                title: 'NINTENDO',
                icon: nesIcon,
                filterRedux: {
                    product_platform: "NES",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
            {
                title: 'GENESIS',
                icon: megaIcon,
                filterRedux: {
                    product_platform: "GENESIS",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
            {
                title: 'MASTER SYSTEM',
                icon: masterIcon,
                filterRedux: {
                    product_platform: "MASTER",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
            {
                title: 'PSX',
                icon: psxIcon,
                filterRedux: {
                    product_platform: "PSX",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
            {
                title: 'N64',
                icon: n64Icon,
                filterRedux: {
                    product_platform: "N64",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
        ],
    },
    {
        heading: 'OTHERS',
        items: [
            {
                title: 'Sales',
                icon: salesIcon,
                link: '/sales',
            },
            {
                title: 'HomeBrew',
                icon: homebrewIcon,
                filterRedux: {
                    product_platform: "HOME",
                },
                link: '/filter',
            },
            {
                title: 'New Games',
                icon: newgameIcon,
                link: '/new',
            },
            {
                title: 'Accessories',
                icon: accessoriesIcon,
                filterRedux: {
                    product_type: 'ACCESSORIES',
                },
                link: '/filter',
            },
            {
                title: 'AYNEO',
                icon: ayaneoIcon,
                filterRedux: {
                    product_platform: "AYNEO",
                    product_type: 'CONSOLE',
                },
                link: '/filter',
            },
        ],
    },
    {
        heading: 'Z STORE',
        items: [
            {
                title: 'About Us',
                icon: aboutIcon,
                link: '/about',
            },
            {
                title: 'Contact Us',
                icon: contactIcon,
                link: '/contact',
            },
            {
                title: 'FAQ',
                icon: faqIcon,
                link: '/faq',
            }
        ],
    },
];