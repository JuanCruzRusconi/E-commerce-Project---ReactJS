import { Button, Card } from "react-bootstrap"

import "./Cart.css"

export const Cart = ( {producto, deleteProduct} ) => {

    return (

        <>
            <div key={producto.id} className="cart-card">

                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={producto.img} />

                    <Card.Body>

                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Title>${producto.precio}</Card.Title>
                        <Card.Title>Cantidad: {producto.cantidad}</Card.Title>
                        <Button style={{ background: 'rgb(133, 139, 252)' }} onClick={() => deleteProduct(producto.id)}>Eliminar del carrito</Button>

                    </Card.Body>
                </Card>

            </div>
        </>
        
    )
}