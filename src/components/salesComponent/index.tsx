import ProductScrollBar from '../salesProductScrollBar/index'
import { Highlight, Heading } from '@chakra-ui/react'

export default function SalesComponent() {
    return (
        <div className='pt-20'>
            <Heading lineHeight='tall' textAlign='center' bg='#9c9c9c48' p='7'>
                <Highlight
                    query='S A L E S'
                    styles={{ px: '3', py: '1', rounded: 'full', bg: '#92222d' }}
                >
                    S A L E S
                </Highlight>
                <Heading lineHeight='tall' textAlign='center' pt='2'>
                    The best games with the best price
                </Heading>
            </Heading>
            <div className='pt-10 pb-10 bg-gray-100'>
                <ProductScrollBar/> 
            </div>
            <Heading lineHeight='small' textAlign='center' bg='#9c9c9c48' p='7'>
                <Heading>
                    Best quality games at the lowest prices
                </Heading>
            </Heading>
        </div>

    )
}