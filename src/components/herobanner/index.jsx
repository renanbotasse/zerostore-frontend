import { SfButton } from '@storefront-ui/react';

export default function Hero() {
    return (
        <div className="relative min-h-[576px] bg-neutral-100">
            <picture>
                <source srcSet="https://i.ibb.co/BCpB944/astronout.png" media="(min-width: 768px)" />
                <img
                    src="https://i.ibb.co/BCpB944/astronout.png"
                    className="absolute w-full h-full z-[1] object-cover"
                />
            </picture>
            <div className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
                <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
                    <img
                        src="https://www.sealzinc.com/cdn/shop/products/B22.png?v=1686134178"
                        alt="Headphones"
                        className="h-full object-cover z-[1] object-left"
                    />
                </div>
                <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
                    <p className="z-[1] typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
                        One Console to rule them all
                    </p>
                    <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
                        AYANEO AIR Plus
                    </h1>
                    <p className="typography-text-base md:typography-text-lg">
                    Nintendo, Sega, PlayStation, Xbox, Windows, Android, and iOS
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <SfButton size="lg" className="bg-[#8c000f]" variant="bg-[#aba798]" > ORDER NOW</SfButton>
                        <SfButton size="lg" className="bg-[#aba798]" variant="bg-[#8c000f]">
                            SHOW MORE
                        </SfButton>
                    </div>
                </div>
            </div>
        </div>
    );
}