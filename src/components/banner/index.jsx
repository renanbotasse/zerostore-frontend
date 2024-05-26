import React from 'react';
import { useDispatch } from 'react-redux';
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { filterRedux } from '../../store/slices/filtersSlice/index'; // Importe a ação do slice de Redux


const displayDetails = [
    {
        title: 'Discover Your Next Adventure',
        subtitle: 'GAMES',
        callToAction: 'GAMES',
        image: 'https://i.ibb.co/qxzXW3K/games.png',
        backgroundColor: 'bg-[#aba798]',
        reverse: false,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: 'game',
        },
    },
    {
        title: 'Unlock Nostalgic Gaming Experiences',
        subtitle: 'CONSOLES',
        callToAction: 'CONSOLES',
        image: 'https://i.pinimg.com/originals/0a/46/a1/0a46a1b92bbba78ed97a06808d5cf5a6.gif',
        backgroundColor: 'bg-[#dee8f3]',
        reverse: true,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: 'console',
        },
    },
    {
        title: 'Stay Up-to-Date with the Latest Releases',
        subtitle: 'NEW',
        callToAction: 'NEW',
        image: "https://i.ibb.co/C2V2mF9/newgame.png",
        backgroundColor: 'bg-[#8c000f]',
        reverse: true,
        filterRedux: {
            product_sale: false,
            product_new: true,
            product_type: null,
        },
    },
    {
        title: 'Score Big with Monthly Deals',
        subtitle: 'SALES',
        callToAction: 'SALES',
        image: 'https://art.pixilart.com/2d29fbba12830ae.png',
        backgroundColor: 'bg-[#bca38b]',
        reverse: false,
        filterRedux: {
            product_sale: true,
            product_new: false,
            product_type: null,
        },
    }
];

const DisplayHorizontalBlock = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate(); // Obtenha o objeto de histórico

    const handleFilterClick = (filterData) => { // Renomeie o parâmetro para evitar confusão com o nome da ação
        console.log("Dispatching filter action with: ", filterData);
        dispatch(filterRedux({ // Use a ação do slice de Redux
            product_platform: null,
            product_sales: filterData.product_sale,
            product_new: filterData.product_new,
            product_type: filterData.product_type
        }));
        // Update the URL without using useHistory
        navigateTo('/filter');
    };

    return (
        <div className="flex flex-col gap-6 md:flex-row bg-neutral-100">
            <div className="flex flex-col gap-6 md:flex-row">
                {displayDetails.map(
                    ({ title, subtitle, description, callToAction, image, backgroundColor, reverse, filterRedux }, index) => (
                        <div
                            key={`${title}-${index}`}
                            className={classNames(
                                `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
                                { 'flex-col-reverse': reverse },
                            )}
                        >
                            <div className="flex flex-col items-center text-center md:p-2">
                                <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{subtitle}</p>
                                <p className="mb-4 font-bold typography-display-2">{title}</p>
                                <p className="mb-4 typography-text-lg">{description}</p>
                                <SfButton className="bg-[#f6ba25]" variant="bg-[#]" onClick={() => handleFilterClick(filterRedux)}>
                                    {callToAction}
                                </SfButton>
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

export default DisplayHorizontalBlock;