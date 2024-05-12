import { Flex, Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NewCard() {
    return (
        <>
            <div className="NewCard">
                <Text>NOVIDADES</Text>
            </div>
            <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.dominioinf.com.br/sites/online/1320/000271-g.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>240P TEST SUIT - COMPLETO SUPER NINTENDO</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                R$130,00
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Comprar
                            </Button>
                            <Link to="/item">
                                <Button variant='ghost' colorScheme='blue'>
                                    Adicionar ao Carrinho
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.dominioinf.com.br/sites/online/1320/000368-g.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>CASTLEVANIA DRACULA X EVIL TREVOR - SUPER NINTENDO</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                R$130,00
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
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.dominioinf.com.br/sites/online/1320/001207-1g.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>BATMAN E ROBIN - COMPLETO MEGA DRIVE</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                R$120,00
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
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://www.dominioinf.com.br/sites/online/1320/000186-g.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>PAR DE PARAFUSOS GAMEBIT 3.8 MM</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                R$3,00
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
            </Flex>
        </>
    )
}
