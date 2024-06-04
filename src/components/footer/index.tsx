import {
    SfButton,
    SfLink,
    SfListItem,
} from '@storefront-ui/react';
import React from 'react';
import { categories, socialMedia } from './footerData'

const Footer: React.FC = () => {
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
                            className=" text-slate-800 hover:text-red-900 hover:bg-white hover:border border-black"
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

export default Footer;