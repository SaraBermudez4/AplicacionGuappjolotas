import React from 'react'
import {
    Flex,
    Spacer,
    Image,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@chakra-ui/react"
import styled from 'styled-components'
//import { categories } from '../utils/mocks/categories'

const DivCCart = styled.div`
    text-align: center;
`

const ButtonCCart = styled.button`
    width: 300px;
    background-color: transparent;
    border: none;
    text-align: left;
`

const TotalCCart = styled.div`
    text-align: center;
    width: 312px;
    height: 53px;
    margin: 0 0 0 50px;
    border-radius: 20px;
    background-color: #ffffff;
`

const TextCCart1 = styled(Text)`
    margin-left: 20px;
    margin-right: 20px;
`

const CategorieCarrito = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    let acum = 0

    props.categories.forEach(cart => {
        let precio = cart.precio
        let cantidad = cart.cantidad
        acum += (precio * cantidad)

    })

    return (
        <>
            {
                props.categories.map(cart => {
                    return (
                        <DivCCart key={`"cart"-${cart.nombre}`}>
                            <ButtonCCart onClick={onOpen}>
                                <Flex>
                                    <Image boxSize="56px" src={cart.imagen} alt={cart.nombre} />
                                    <Spacer />
                                    <div>
                                        <Text>{cart.nombre}</Text>
                                        <Text>x{cart.cantidad}</Text>
                                    </div>
                                    <Spacer />
                                    <Text>${cart.precio * cart.cantidad} MXN</Text>
                                </Flex>
                            </ButtonCCart>
                        </DivCCart>
                    )
                })
            }
            <hr />
            <TotalCCart>
                <Flex>
                    <TextCCart1>Total</TextCCart1>
                    <Spacer />
                    <TextCCart1>$
                        {acum} MXN
                    </TextCCart1>
                </Flex>
            </TotalCCart>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight="bold" mb="1rem">
                            You can scroll the content behind the modal
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CategorieCarrito