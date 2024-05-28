import { SfButton } from '@storefront-ui/react';

export default function ProductCard({ product }) { // Recebe um único produto como uma prop
    return (
        <div className="flex flex-col min-w-[400px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl">
            <a
                className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
                href="#"
                aria-label={product.product_name}
            />
            <img
                src={product.product_img[0]}
                alt={product.product_name}
                className="object-fit h-auto rounded-t-md aspect-square"
            />
            <div className="flex flex-col items-start p-4 grow">
                <p className="font-medium typography-text-base">{product.product_name}</p>
                <p className="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">
                    R${product.product_price.toFixed(2)}
                </p>
                <div className="relative">
                    <SfButton className="mr-2 bg-red-950 hover:bg-red-950 hover:font-bold active:bg-red-900">
                        Comprar
                    </SfButton>
                    <SfButton variant="tertiary" className="text-red-950 hover:bg-red-950 hover:text-white active:bg-red-900 active:text-white">
                        Adicionar ao Carrinho
                    </SfButton>
                </div>
            </div>
        </div>
    );
}
