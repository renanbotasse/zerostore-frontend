import {
    SfIconContactSupport,
    SfIconFacebook,
    SfIconHelp,
    SfIconInstagram,
    SfIconCall,
    SfIconPinterest,
    SfIconTwitter,
    SfIconYoutube,
    SfButton,
    SfLink,
    SfListItem,
} from '@storefront-ui/react';

const categories = [
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
const socialMedia = [
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

export default function Footer() {
    return (
        <footer className="pt-10 bg-neutral-100 z-[1]">
            <div className="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(3,1fr)] px-3 md:px-6 pb-10 max-w-[1536px] mx-auto ">
                {categories.map(({ label, subcategories }) => (
                    <ul className="grid grid-cols xs:pb-4" key={label}>
                        <li className="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body">{label}</li>
                        {subcategories?.map(({ subcategoryLabel, link }) => (
                            <SfListItem key={subcategoryLabel}>
                                <SfLink
                                    className="no-underline text-neutral-600 hover:underline active:underline"
                                    variant="secondary"
                                    href={link}
                                >
                                    {subcategoryLabel}
                                </SfLink>
                            </SfListItem>
                        ))}
                    </ul>
                ))}
            </div>
            <hr />
            <div className="c000f] justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(3,1fr)] px-3 md:px-2 pb-4">
                <div className="flex justify-center py-2 gap-x-4 md:self-start">
                    {socialMedia.map(({ icon: Icon, label, link }) => (
                        <SfButton
                            key={label}
                            square
                            as="a"
                            variant="tertiary"
                            className="text-white hover:text-[#8c000f] hover:!bg-white "
                            href={link}
                            aria-label={`Go to ${label} page`}
                        >
                            <Icon />
                        </SfButton>
                    ))}
                </div>
            </div>
        </footer>
    );
}
