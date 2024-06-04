import { SfButton } from '@storefront-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { productRedux } from '../../store/slices/productSlice/index';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigateTo = useNavigate();
    const dispatch = useDispatch(); // Obtendo a função dispatch do Redux

    const handleClick = () => {
        dispatch(productRedux(product));
        navigateTo('/product-detail');
    };

    return (

            <div className="flex flex-col max-h-[600px] min-[600px] min-w-[250px] max-w-[250px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl bg-gray-200">
                <a
                    className="inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
                    href="#"
                    aria-label={product.product_name}
                />
                <img
                    src={product.product_img[0]}
                    alt={product.product_name}
                    className="object-fit h-auto rounded-t-md aspect-square"
                />
                <div className="flex flex-col items-center justify-center text-center grow">
                    <p className="pt-3 min-h-[60px] font-medium typography-text-base">{product.product_name}</p>
                    <p className="mb-4 font-bold text-neutral-700">
                        ${product.product_price.toFixed(2)}
                    </p>

                </div>
                <div className="flex flex-col p-1 grow">
                    <SfButton className="bg-red-950 hover:bg-red-950 hover:font-bold active:bg-red-900" onClick={handleClick}>
                        Add to Cart
                    </SfButton>
                </div>
            </div>

    );
}
