import { SfScrollable } from '@storefront-ui/react';
import ProductCard from '../productCard';
import { useState, useEffect } from 'react';

export default function ProductNewScrollBar() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/new');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchFilteredProducts();
    }, []);

    return (
        <SfScrollable className=" bg-gray-100 items-center w-full h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {products.map((product, i) => (
                <div
                    key={i}
                    className="ml-4 flex items-center justify-center text-gray-500 border border-dashed w-[400px] h-[550px] shrink-0 bg-neutral-100 border-negative-300"
                >
                    <ProductCard product={product}/>
                </div>
            ))}
        </SfScrollable>
    );
}
