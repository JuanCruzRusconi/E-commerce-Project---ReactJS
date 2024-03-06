import { Link, useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { KeepBuying } from "../KeepBuying/KeepBuying"
import { Button, Card } from "react-bootstrap"

import "./ItemDetail.css"

export const ItemDetail = ({producto}) => {

    const [isAmount, setIsAmount] = useState(true)

    const {pid} = useParams()
    
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({ ...producto, cantidad })
        setIsAmount(false)
    }

    return (

        <>
            <div className="item-detail">
                
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={producto.img} className="product-img" />

                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            {producto.categoria} {producto.nombre} disponible acutalmente en color {producto.color}.
                        </Card.Text>
                        <Card.Title>${producto.precio}</Card.Title>
                        <Card.Text>Stock disponible: {producto.stock}</Card.Text>
                        <Card.Text>ID: {pid}</Card.Text>

                    </Card.Body>
                </Card>

            </div>    

            {isAmount ?
                <ItemCount onAdd={onAdd} />
                :
                <>
                    <div className="button-container">
                        <KeepBuying />
                        <Link to={"/cart"}>
                            <Button style={{ background: 'rgb(133, 139, 252)' }}>Finalizar la compra</Button>
                        </Link>
                    </div>
                </>
            }
        </>

    )
}



/*

"holder.js/100px180"

 <div className="contenedorItem">

                <div className="item">
                    <h3>Producto: {producto.nombre}</h3>
                    <h3>Marca: {producto.categoria}</h3>
                    <h3>Precio: ${producto.precio}</h3>
                    <h3>ID de producto: {pid}</h3>
                    <h3>Stock disponible: {producto.stock}</h3>
                </div>
            </div>
            */