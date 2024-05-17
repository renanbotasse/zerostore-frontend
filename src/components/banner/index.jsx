import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [

    {
        title: 'Discover Your Next Adventure',
        subtitle: 'GAMES',
        callToAction: 'GAMES',
        image: 'https://i.ibb.co/qxzXW3K/games.png',
        backgroundColor: 'bg-[#aba798]',
        reverse: false,
    },
    {
        title: 'Unlock Nostalgic Gaming Experiences',
        subtitle: 'CONSOLES',
        callToAction: 'CONSOLES',
        image: 'https://i.pinimg.com/originals/0a/46/a1/0a46a1b92bbba78ed97a06808d5cf5a6.gif',
        backgroundColor: 'bg-[#dee8f3]',
        reverse: true,
    },

    {
        title: 'Stay Up-to-Date with the Latest Releases',
        subtitle: 'NEW GAMES',
        callToAction: 'NEW GAMES',
        image: "https://i.ibb.co/C2V2mF9/newgame.png",
        backgroundColor: 'bg-[#8c000f]',
        reverse: true,
    },
    {
        title: 'Score Big with Monthly Deals',
        subtitle: 'SALES',
        callToAction:'SALES',
        image: 'https://art.pixilart.com/2d29fbba12830ae.png',
        backgroundColor: 'bg-[#bca38b]',
        reverse: false,
    }
];

export default function DisplayHorizontalBlock() {
    return (
        <div className="flex flex-col gap-6 md:flex-row bg-neutral-100">
            <div className="flex flex-col gap-6 md:flex-row">
                {displayDetails.map(
                    ({ title, subtitle, description, callToAction, image, backgroundColor, reverse }, index) => (
                        <div
                            key={`${title}-${index}`}
                            className={classNames(
                                `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
                                { 'flex-col-reverse': reverse },
                            )}
                        >
                            <a
                                className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
                                aria-label={title}
                                href="#"
                            />
                            <div className="flex flex-col items-center text-center md:p-2">
                                <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{subtitle}</p>
                                <p className="mb-4 font-bold typography-display-2">{title}</p>
                                <p className="mb-4 typography-text-lg">{description}</p>
                                <SfButton className="bg-[#f6ba25]" variant="bg-[#]">{callToAction}</SfButton>
                            </div>
                            <div className="flex items-center w-full">
                                <img src={image} alt={title} className="w-full" />
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}