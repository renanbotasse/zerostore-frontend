import React from 'react';
import { useDispatch } from 'react-redux';
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { filterRedux } from '../../store/slices/filtersSlice/index';
import { displayDetails } from './bannerLandingData'

const BannerLanding = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleFilterClick = (filterData) => {
        if (filterData.product_type == 'CONSOLE' || filterData.product_type == 'GAME')
            {
                dispatch(filterRedux({
                    product_type: filterData.product_type
                }));
                navigateTo('/filter');
            }
        else if (filterData.product_status == "SALES")
            {
                navigateTo('/sales');
            }
        else{
            navigateTo('/new');
        }
    };

    return (
        <div className="flex flex-col md:flex-row bg-neutral-100">
            <div className="flex flex-col md:flex-row">
                {displayDetails.map(
                    ({ title, subtitle, description, callToAction, image, backgroundColor, reverse, filterRedux }, index) => (
                        <div
                            key={`${title}-${index}`}
                            className={classNames(
                                `relative p-3 flex flex-col md:items-center md:basis-1/2 ${backgroundColor}`,
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
                            <div className="flex items-center w-cover">
                                <img src={image} alt={title} className="w-cover h-cover" />
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

export default BannerLanding;