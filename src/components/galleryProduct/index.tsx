import { useState } from 'react';
import {
    SfScrollable,
    SfButton,
    SfIconChevronLeft,
    SfIconChevronRight,
    type SfScrollableOnDragEndData,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { rootState } from '../../store/reducers';

export default function GalleryProduct() {

    const product = useSelector((state: rootState) => state.productRedux);

    const images = [
        { imageSrc: product.product_img[2], alt: product.product_name },
        { imageSrc: product.product_img[1], alt: product.product_name },
        { imageSrc: product.product_img[0], alt: product.product_name },
    ];

    const video = {
        videoSrc: product.product_video, alt: product.product_name
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const onDragged = (event: SfScrollableOnDragEndData) => {
        if (event.swipeRight && activeIndex > 0) {
            setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
        } else if (event.swipeLeft && activeIndex < product.product_img.length) {
            setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
        }
    };

    return (
        <div className="relative pr-10 flex flex-col w-full max-h-[800px]  aspect-[2/1] pt-10 pb-10">
            <SfScrollable
                className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                activeIndex={activeIndex}
                wrapperClassName="h-full min-h-0"
                buttonsPlacement="none"
                isActiveIndexCentered
                drag={{ containerWidth: true }}
                onDragEnd={onDragged}
            >
                <div className="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`${video.videoSrc}/0.jpg`}
                        title={video.alt}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {images.map(({ imageSrc, alt }, index) => (
                    <div
                        key={`${alt}-${index}`}
                        className="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always"
                    >
                        <img
                            aria-label={alt}
                            aria-hidden={activeIndex !== index + 1}
                            className="w-auto h-full"
                            alt={alt}
                            src={imageSrc}
                        />
                    </div>
                ))}
            </SfScrollable>
            <SfScrollable
                className="flex justify-center items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                activeIndex={activeIndex}
                buttonsPlacement="floating"
                slotPreviousButton={
                    <SfButton
                        className="absolute disabled:hidden !rounded-full z-10 left-4 bg-white"
                        variant="secondary"
                        size="sm"
                        square
                        slotPrefix={<SfIconChevronLeft size="sm" />}
                    />
                }
                slotNextButton={
                    <SfButton
                        className="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
                        variant="secondary"
                        size="sm"
                        square
                        slotPrefix={<SfIconChevronRight size="sm" />}
                    />
                }
            >
                <button
                    type="button"
                    aria-label={product.product_name}
                    aria-current={activeIndex === 0}
                    className={classNames(
                        'md:w-32 md:h-32 relative shrink-0 pb-1 my-2 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
                        activeIndex === 0 ? 'border-primary-700' : 'border-transparent',
                    )}
                    onClick={() => setActiveIndex(0)}
                >
                    <img
                        alt={product.product_name}
                        className="object-contain border border-neutral-200"
                        width="w-100"
                        height="h-100"
                        src={images[2].imageSrc} // Thumbnail for the video
                    />
                </button>
                {images.map(({ imageSrc, alt }, index) => (
                    <button
                        type="button"
                        aria-label={product.product_name}
                        aria-current={activeIndex === index + 1}
                        key={`${alt}-${index}-thumbnail`}
                        className={classNames(
                            'md:w-32 md:h-32 relative shrink-0 pb-1 my-2 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
                            activeIndex === index + 1 ? 'border-primary-700' : 'border-transparent',
                        )}
                        onClick={() => setActiveIndex(index + 1)}
                    >
                        <img
                            alt={alt}
                            className="object-contain border border-neutral-200"
                            width="200"
                            height="200"
                            src={imageSrc}
                        />
                    </button>
                ))}
            </SfScrollable>
        </div>
    );
}
