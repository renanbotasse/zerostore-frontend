import { Flex, Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'
import './styles.css'


export default function DestaqueCard() {
    return (
        <>
        <div className="Destaque">
        <Text>DESTAQUES</Text>
        </div>
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://www.dominioinf.com.br/sites/online/1320/001652-2g.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>BOX SHINOBI COLLECTION MEGA DRIVE</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        R$280,00
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
                    src='https://www.dominioinf.com.br/sites/online/1320/001432-g.jpg?t=885'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>BOX STREETS OF RAGE COLLECTION MEGA DRIVE</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        R$280,00
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
                    src='https://www.dominioinf.com.br/sites/online/1320/000869-g.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>SUPER MARIO ALLSTAR: ULTIMATE COLLECTION - SUPER NINTENDO</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        R$180,00
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
                    src='https://www.dominioinf.com.br/sites/online/1320/001936-g.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>CASTLEVANIA BLOODLINES COLLECTION</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        R$180,00
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
