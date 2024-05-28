import {
    SfRating,
    SfButton,
    SfLink,
    SfCounter,
    SfIconShoppingCart,
    SfIconCompareArrows,
    SfIconFavorite,
    SfIconSell,
    SfIconPackage,
    SfIconRemove,
    SfIconAdd,
    SfIconWarehouse,
    SfIconSafetyCheck,
    SfIconShoppingCartCheckout,
} from '@storefront-ui/react';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@storefront-ui/shared';
import { Highlight, Heading } from '@chakra-ui/react';
import { rootState } from '../../store/reducers';
import { useSelector } from 'react-redux';

export default function ProductDescription() {
    const product = useSelector((state: rootState) => state.productRedux);

    const inputId = useId();
    const min = 1;
    const max = 999;
    const [value, { inc, dec, set }] = useCounter(min);

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { value: currentValue } = event.target;
        const nextValue = parseFloat(currentValue);
        set(Number(clamp(nextValue, min, max)));
    }

    return (
        <section className="md:max-w-[640px] bg-gray-100 p-10 border border-black rounded-xl">
            <h1 className="mb-4 font-extrabold text-4xl">
                {product.product_name} ({product.product_platform})
            </h1>
            <strong className="mb-4 block font-bold text-xl">${product.product_price},00</strong>
            <ul className="mb-4 font-normal text-justify">
                <Highlight
                    query={product.product_name}
                    styles={{ px: '5', py: '1', bg: 'orange', fontSize: '20', fontWeight: 'bold' }}
                >
                    {product.product_description}
                </Highlight>
            </ul>
            <div className="py-4 mb-4 border-gray-200 border-y">
                <div className="items-start xs:flex">
                    <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
                        <div className="flex border border-neutral-300 rounded-md">
                            <SfButton
                                variant="tertiary"
                                square
                                className="rounded-r-none p-3"
                                disabled={value <= min}
                                aria-controls={inputId}
                                aria-label="Decrease value"
                                onClick={() => dec()}
                            >
                                <SfIconRemove />
                            </SfButton>
                            <input
                                id={inputId}
                                type="number"
                                role="spinbutton"
                                className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                                min={min}
                                max={max}
                                value={value}
                                onChange={handleOnChange}
                            />
                            <SfButton
                                variant="tertiary"
                                square
                                className="rounded-l-none p-3"
                                disabled={value >= max}
                                aria-controls={inputId}
                                aria-label="Increase value"
                                onClick={() => inc()}
                            >
                                <SfIconAdd />
                            </SfButton>
                        </div>
                        <p className="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
                            <strong className="text-neutral-900">{product.product_available}</strong> in stock
                        </p>
                    </div>
                    <SfButton size="lg" className="w-full xs:ml-4" slotPrefix={<SfIconShoppingCart size="sm" />}>
                        Add to cart
                    </SfButton>
                </div>
            </div>
            <div className="flex first:mt-4">
                <SfIconPackage size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
                <p className="text-sm">
                    Free shipping, arrives by 10 days.
                </p>
            </div>
        </section>
    );
}
