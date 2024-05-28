import { useState } from 'react';
import classNames from 'classnames';
import ModalLegal from '../modalLegal';
import { SfButton } from '@storefront-ui/react';
import { displayDetails } from './bannerLegalData'

export default function BannerLegal() {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="flex flex-col gap-6 md:flex-row">
            {displayDetails.map(({ text, subtitle, description, callToAction, image, backgroundColor, reverse }) => (
                <div
                    key={description}
                    className={classNames(
                        `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
                        { 'flex-col-reverse': reverse },
                    )}
                >
                    <div className="flex flex-col items-center p-4 text-center md:p-10">
                        <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{subtitle}</p>
                        <p className="mb-4 typography-text-lg">{description}</p>
                        <SfButton
                            onClick={() => openModal({ text, description })}
                            className="font-semibold bg-neutral-900 text-white z-[5] hover:bg-red-950 "
                        >
                            {callToAction}
                        </SfButton>
                    </div>
                    <div className="flex items-end justify-center w-full h-[500px] mt-36">
                        <img src={image} alt={description} className="w-full h-full object-contain" />
                    </div>
                </div>
            ))}
            {modalContent && <ModalLegal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />}
        </div>
    );
}
