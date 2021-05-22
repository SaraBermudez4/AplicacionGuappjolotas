import React, { useRef } from 'react'
import {
    Modal
} from 'react-bootstrap'
import {
    Image,
    Text
} from "@chakra-ui/react"
import useCounter from '../../hooks/useCounter'
import styled from 'styled-components'
import axios from 'axios'

const HeaderModal = styled(Modal.Header)`
    flex-direction: column;
    align-items: center;
`

const TextModal1 = styled(Text)`
    font-weight: bold;
    font-size: 17px;
    margin-top: 16px;
`

const TextModal2 = styled(Text)`
    margin-top: 8px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #FA4A0C;
`

const BodyModal = styled(Modal.Body)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 0 60px;
    border-radius: 20px;
    margin-bottom: 20px;
`

const TextModal3 = styled(Text)`
    font-size: 22px;
    font-weight: bold;
    line-height: 27px;
    margin: 0 32px;
`

const FooterModal = styled(Modal.Footer)`
    flex-direction: column-reverse;
`

const ButtonModal3 = styled.button`
    width: 264px;
    height: 45px;
    background: #FA4A0C;
    border-radius: 40px;
    font-weight: bold;
    color: white;
`

const ButtonModal4 = styled.button`
    color: #FA4A0C;
    font-weight: bold;
`

const ModalCarrito = ({ cart, handleClose }) => {

    const { state, incremento, decremento } = useCounter(cart.cantidad)

    const cantidadRef = useRef('')

    const editarCantidad = async (e) => {

        const nuevaCantidad = cantidadRef.current.textContent

        console.log(nuevaCantidad)

        console.log(cart.id)

        // function refreshPage() {
        //     window.location.reload(false);
        // }

        if (nuevaCantidad === 0) {
            console.log('hola')

            const url =  `http://localhost:3004/cart/${cart.id}`

            try {

                const resultado = await axios.delete(url)

                if (resultado.status === 200) {
                    console.log('Producto eliminado');
                }

                window.location.reload()
            } catch {
                console.log('Error en la eliminacion')
            }
        } else {
            console.log('Actualizar producto')

            const actualizarCantidad = {
                nombre: cart.nombre,
                precio: cart.precio,
                imagen: cart.imagen,
                cantidad: parseInt(nuevaCantidad)
            }

            console.log(actualizarCantidad)

            const url =  `http://localhost:3004/cart/${cart.id}`

            console.log(url);

            try {
                const resultado = await axios.put(url, actualizarCantidad)

                if (resultado.status === 200) {
                    console.log('Producto actualizado');
                }

                window.location.reload()
            } catch {
                console.log('Error en la actualizacion');
            }
        }
    }
    
    return (
        <div className="holaa3">
            <HeaderModal>
                <Image src={cart.imagen} alt={cart.nombre} />
                <TextModal1>{cart.nombre}</TextModal1>
                <TextModal2>${cart.precio * cart.cantidad} MXN</TextModal2>
            </HeaderModal>
            <BodyModal>
                {
                    (state === 0)
                        ?
                        <Image boxSize="40px" src="https://i.ibb.co/bQtPKQw/minus-circle-gray.png" alt="minus-circle-gray" />
                        :
                        <button onClick={decremento}><Image src="https://i.ibb.co/wRnV6YJ/minus-circle.png" alt="minus-circle" /></button>
                }
                <TextModal3 ref={cantidadRef}>{state}</TextModal3>
                <button onClick={incremento}><Image src="https://i.ibb.co/gWVpXrD/plus-circle.png" alt="plus-circle" /></button>
            </BodyModal>
            <FooterModal>

                <ButtonModal4 onClick={handleClose}>
                    Cerrar
                </ButtonModal4>
                {
                    (state === cart.cantidad)
                        ?
                        <ButtonModal3 onClick={handleClose} style={{opacity: '0.5'}}>
                            Actualizar
                        </ButtonModal3>
                        :
                        <ButtonModal3 onClick={editarCantidad}>
                            Actualizar
                        </ButtonModal3>
                }
            </FooterModal>
            {/* <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer> */}
        </div>
        // <ModalContent>
        //     {/* {
        //         ()
        //     } */}
        //     <Image boxSize="80px" src={props.categories.imagen} alt={props.categories.nombre} />
        //     <Text fontWeight="bold">{props.categories.nombre}</Text>
        //     <Text fontWeight="bold" mb="1rem">${props.categories.precio * props.categories.cantidad} MXN</Text>
        //     <Flex>
        //         <Button>
        //             <Image boxSize="40px" src="https://i.ibb.co/HChhBq0/minus-circlex4.png" alt="minus" />
        //         </Button>
        //         <Text fontWeight="bold" fontSize="2xl">{props.categories.cantidad}</Text>
        //         <Button>
        //             <Image boxSize="40px" src="https://i.ibb.co/z4CDD2f/plus-circlex4.png" alt="plus" />
        //         </Button>

        //     </Flex>
        //     <Button mr={3} background="#FA4A0C" color="white">Actualizar</Button>
        // </ModalContent>
    )
}

export default ModalCarrito
