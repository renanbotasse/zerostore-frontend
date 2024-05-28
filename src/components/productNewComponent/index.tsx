import ProductNewScrollBar from '../productNewScrollBar'
import { Highlight, Heading } from '@chakra-ui/react'

export default function ProductNewComponent() {
    return (
        <div className='pt-20'>
            <Heading lineHeight='tall' textAlign='center' bg='#9c9c9c48' p='7'>
                <Highlight
                    query='N E W'
                    styles={{ px: '3', py: '1', rounded: 'full', bg: '#92222d' }}
                >
                    N E W
                </Highlight>
                <Heading lineHeight='tall' textAlign='center' pt='2'>
                    New games with the best price
                </Heading>
            </Heading>
            <div className='pt-10 pb-10 bg-gray-100'>
                <ProductNewScrollBar/>
            </div>
            <Heading lineHeight='small' textAlign='center' bg='#9c9c9c48' p='7'>
                <Heading>
                    Best quality!
                </Heading>
            </Heading>
        </div>

    )
}