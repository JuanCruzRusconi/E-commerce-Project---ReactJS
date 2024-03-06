
import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { CartForm } from "../CartForm/CartForm"
import { Cart } from "../Cart/Cart"
import { KeepBuying } from "../KeepBuying/KeepBuying"
import { Title } from "../Title/Title"
import { Button } from "react-bootstrap"

import "./CartContainer.css"

export const CartContainer = () => {

    const { cartList, emptyCart, totalPrice, deleteProduct } = useCartContext()

    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })

    const generateOrder = (evt) => {

        evt.preventDefault()

        const order = {}
        order.buyer = dataForm
        order.products = cartList.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad }))
        order.total = totalPrice()

        // Insertar order a firebase 
        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, "orders")

        addDoc(ordersCollection, order)
            .then(Response => alert(`El ID de su compra es: ${Response.id}`))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({})
                emptyCart()
            })
    }

    const handleOnChange = (evt) => {
        console.log(evt.target.name)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    let title = "PRODUCTOS AGREGADOS AL CARRITO"
    let text = "No hay productos agregados al carrito!"

    return (

        <div className="cart-container">

            {cartList.length != 0 ?
                <>
                    <div className="cart-title">
                        <Title title={title} />
                    </div>
                    <div className="cart-cards-container">
                        {cartList.map(producto => (
                            <Cart key={producto.id} producto={producto} deleteProduct={deleteProduct} totalPrice={totalPrice} emptyCart={emptyCart} />))}

                    </div>
                    <div className="cart-total-price">

                        <Title title={`MONTO TOTAL: $${totalPrice()}`} />

                    </div>

                    <div className="cart-button">

                        <KeepBuying />

                        <Button style={{ background: 'rgb(133, 139, 252)' }} onClick={emptyCart}>Vaciar carrito</Button>

                    </div>

                    <CartForm generateOrder={generateOrder} handleOnChange={handleOnChange} dataForm={dataForm} />
                </>
                :
                <div>
                    <Title text={text} />

                    <KeepBuying />
                </div>
            }

        </div>

    )
}

