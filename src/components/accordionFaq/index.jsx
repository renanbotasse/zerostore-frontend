import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';
import { accordionItems } from './accordionFaqData'

export default function AccordionFaq() {
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
