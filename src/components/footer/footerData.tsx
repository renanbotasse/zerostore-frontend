import {
    SfIconFacebook,
    SfIconInstagram,
    SfIconYoutube,
} from '@storefront-ui/react';

export const categories = [
    {
        label: 'Help',
        subcategories: [
            {
                subcategoryLabel: 'Retro Bot',
                link: '#',
            },
            {
                subcategoryLabel: 'Software Download',
                link: '#',
            },
            {
                subcategoryLabel: 'Work with Us',
                link: '#',
            },
        ],
    },
    {
        label: 'Legal Mentions',
        subcategories: [
            {
                subcategoryLabel: 'Devolution and Changes',
                link: '/legal-mentions',
            },
            {
                subcategoryLabel: 'Privacy Policy',
                link: '/legal-mentions',
            },
            {
                subcategoryLabel: 'Cookies',
                link: '/legal-mentions',
            }
        ],
    },
    {
        label: 'About',
        subcategories: [
            {
                subcategoryLabel: 'About Us',
                link: '/about',
            },
            {
                subcategoryLabel: 'Contact Us',
                link: '/contact',
            },
            {
                subcategoryLabel: 'FAQ',
                link: '/faq',
            }
        ],
    }
];

export const socialMedia = [
    {
        label: 'Facebook',
        link: 'https://www.facebook.com/megaman/',
        icon: () => <SfIconFacebook />,
    },
    {
        label: 'Instagram',
        link: 'https://www.instagram.com/megaman/',
        icon: () => <SfIconInstagram />,
    },
    {
        label: 'Youtube',
        link: 'https://www.youtube.com/watch?v=nmO-LQmMMkQ&ab_channel=MegaMan',
        icon: () => <SfIconYoutube />,
    },
];