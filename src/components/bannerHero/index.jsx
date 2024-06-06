import { SfButton } from '@storefront-ui/react';
import ayaneoPocket from '../../assets/ayaneopocket.png'
import ayaneoPocketFocus from '../../assets/ayaneopocket2.png'
import { useNavigate } from 'react-router-dom';

export default function BannerHero() {
    const navigateTo = useNavigate();
    const handleFilterClick = () => {
        navigateTo('/ayaneo');
    }

    return (
        <div className="relative pb-4 pt-20 min-h-[576px] bg-neutral-100">
            <picture>
                <img
                    src={ayaneoPocket}
                    className="absolute w-full h-full object-cover"
                />
            </picture>
            <div className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
                <div className="flex flex-col pt-4 md:basis-1/4 justify-center md:items-stretch md:overflow-hidden">
                    <img
                        src={ayaneoPocketFocus}
                        alt="Headphones"
                        className="z-[1] object-left"
                    />
                </div>
                <div className="z-[2] md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <SfButton className="bg-[#f6ba25]" variant="bg-[#]" onClick={() => handleFilterClick()}>
                            Click to Learn More
                        </SfButton>
                    </div>
                </div>
            </div>
        </div>
    );
}