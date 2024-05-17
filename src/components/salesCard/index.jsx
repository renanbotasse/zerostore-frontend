import { useState, useEffect } from 'react';
import { Flex, Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react';
import './styles.css';

export default function SalesCard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products/sales')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching sales products:', error));
    }, []);

    return (
        <>
            <div className="Destaque">
                <Text>SALES</Text>
            </div>
            <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                {products.map(product => (
                    <Card key={product._id} maxW='sm'>
                        <CardBody>
                            <Image
                                src={product.product_img[0]}
                                alt={product.product_name}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.product_name}</Heading>
                                <Text color='blue.600' fontSize='2xl'>
                                    R${product.product_price.toFixed(2)}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Comprar
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Adicionar ao Carrinho
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
        </>
    )
}
