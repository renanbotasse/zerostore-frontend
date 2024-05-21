import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';

const accordionItems = [
    {
        id: 'acc-1',
        summary: 'Where can I find information about shipping?',
        details: 'You can find detailed shipping information on our website or during the checkout process. Additionally, we will send you an email confirmation with tracking details once your order has been shipped.',
    },
    {
        id: 'acc-2',
        summary: 'What payment methods do you accept?',
        details: "We accept a variety of payment methods, including credit cards, debit cards, PayPal, and more. You can view all available payment options during the checkout process.",
    },
    {
        id: 'acc-3',
        summary: 'Do you offer international shipping?',
        details: "Yes, we offer international shipping to many countries worldwide. Shipping costs and delivery times may vary depending on your location. Please check our website for more information.",
    },
    {
        id: 'acc-4',
        summary: 'What is your return policy?',
        details: "Our return policy allows you to return eligible items within a specified timeframe for a refund or exchange. Please review our return policy on our website for detailed information about eligibility and procedures.",
    },
    {
        id: 'acc-5',
        summary: 'How do I track my order?',
        details: "Once your order has been shipped, we'll send you a confirmation email with tracking information. You can use this information to track the status of your delivery on our website or through the shipping carrier's website.",
    },
    {
        id: 'acc-6',
        summary: 'Can I change or cancel my order?',
        details: "You may be able to change or cancel your order before it is processed for shipment. Please contact our customer service team as soon as possible to request any changes or cancellations.",
    },
    {
        id: 'acc-7',
        summary: 'How do I contact customer support?',
        details: "You can reach our customer support team via email, phone, or live chat. Visit our website for our contact information and support hours.",
    },
    {
        id: 'acc-8',
        summary: 'Are your products eco-friendly?',
        details: "We strive to offer environmentally friendly products whenever possible. Look for product descriptions and labels indicating sustainability or eco-friendly features.",
    },
    {
        id: 'acc-9',
        summary: 'Do you offer gift wrapping?',
        details: "Yes, we offer gift wrapping services for select items. During the checkout process, you'll have the option to add gift wrapping to your order for an additional fee.",
    },
    {
        id: 'acc-10',
        summary: 'What if I receive a damaged item?',
        details: "If you receive a damaged or defective item, please contact our customer support team immediately. We'll work with you to resolve the issue and provide a replacement or refund as necessary.",
    },
];


export default function ComponentFaq() {
    return (
        <Accordion allowToggle>
            {accordionItems.map(({ id, summary, details }) => (
                <AccordionItem key={id}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="center" zIndex={5} fontSize={24} >
                                {summary}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5} textAlign="center" zIndex={5} fontSize={18}>
                        {details}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
