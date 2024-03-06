import { memo } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./Item.css"

const Item = memo ( ({producto}) => {

    return (

        <div key={producto.id} className="item">

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={producto.img} className="product-img"/>
            
                <Card.Body>

                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to={`/detail/${producto.id}`}>
                        <Button style={{ background: 'rgb(133, 139, 252)' }} variant="primary">Ver detalle de producto</Button>
                    </Link>

                </Card.Body>

            </Card>

        </div>

    )
})

export default Item

//<img src={producto.img} className="containerImagen" alt="imagen" />


/*
<div className="contenedorItem">

            <h3>Item</h3>
            <div key={producto.id} className="contenedorItem">
                <img src="" alt="" />
                <div className="card-body">
                    <h3>{producto.nombre}</h3>
                    <h3>${producto.precio}</h3>
                </div>
                <div>
                    <Link to={`/detail/${producto.id}`}>
                        <button>Ver detalle de producto</button>
                    </Link>
                </div>
            </div>
            
        </div>
        */    