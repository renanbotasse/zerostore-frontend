import { useState } from 'react';
import classNames from 'classnames';
import ModalLegal from '../modalLegal';
import { SfButton } from '@storefront-ui/react';

const displayDetails = [
    {
        title: '',
        subtitle: 'Devolution and Changes',
        description: 'Details about devolution and changes.',
        callToAction: 'Learn More',
        image: 'src/assets/devolution2.png',
        backgroundColor: 'bg-[#aba798]',
        reverse: true,
        text: 'At Zero Store, we believe in the continuous evolution of our products and services to meet the ever-changing needs of our customers. Our commitment to innovation drives us to embrace change and adapt to new technologies, trends, and market dynamics. As part of our dedication to transparency and improvement, we regularly review and refine our processes, policies, and offerings. Through devolution, we empower our teams to challenge the status quo, explore new ideas, and implement impactful changes that enhance the overall experience for our customers. We understand that change can sometimes be daunting, but it also presents opportunities for growth and innovation. By embracing change, we strive to stay ahead of the curve, deliver exceptional value, and exceed the expectations of our valued customers. Join us on this journey of devolution and change as we continue to innovate and evolve.'
    },
    {
        title: '',
        subtitle: 'Privacy Policy',
        description: 'Details about privacy policy.',
        callToAction: 'Learn More',
        image: 'src/assets/policy2.png',
        backgroundColor: 'bg-[#dee8f3]',
        reverse: true,
        text: 'At Zero Store, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website, products, and services. Information Collection: We may collect personal information such as your name, email address, and contact details when you register an account, make a purchase, or subscribe to our newsletter. We also gather anonymous data through cookies and similar technologies to enhance your browsing experience. Data Usage: Your personal information is used to provide and improve our products and services, personalize your experience, and communicate with you about promotions, updates, and important notices. We do not sell or share your information with third parties for marketing purposes without your consent. Data Security: We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. Your Rights: You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving marketing communications from us.'
    },
    {
        title: '',
        subtitle: 'Cookies',
        description: 'Details about cookies.',
        callToAction: 'Learn More',
        image: 'src/assets/cookies2.png',
        backgroundColor: 'bg-[#bca38b]',
        reverse: true,
        text: 'Cookies At Zero Store, we use cookies to enhance your browsing experience and provide personalized content and services. Cookies are small text files that are stored on your device when you visit our website. They help us analyze website traffic, remember your preferences, and optimize our website performance. Types of Cookies: We use both session and persistent cookies. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a specified period or until you delete them. We also use first-party and third-party cookies to collect information about your browsing behavior and interactions with our website. Cookie Usage: We use cookies for various purposes, including: Analyzing website traffic and usage patterns Personalizing your browsing experience and displaying relevant content Remembering your preferences and settings Tracking the effectiveness of our marketing campaigns Providing social media features and integrations Cookie Management: You can control and manage cookies through your browser settings. You have the option to accept, reject, or delete cookies, as well as configure cookie preferences for specific websites. By continuing to use our website, you consent to the use of cookies as described in this Cookies Policy.'
    },
];

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
