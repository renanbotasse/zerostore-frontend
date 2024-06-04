import { SfScrollable } from '@storefront-ui/react';
import StatusProductCard from '../productStatus';
import { useState, useEffect } from 'react';
import { newProductsRequest } from '../../api/products/newProducts';

export default function ProductNewScrollBar() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            const data = await newProductsRequest();
            setProducts(data);
        };
        fetchFilteredProducts();
    }, []);


    return (
        <SfScrollable className=" bg-gray-100 items-center w-full h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {products.map((product, i) => (
                <div
                    key={i}
                    className="flex items-center justify-center text-gray-500 border shrink-0 bg-neutral-100"
                >
                    <StatusProductCard product={product}/>
                </div>
            ))}
        </SfScrollable>
    );
}
