import { Button } from "react-bootstrap"
import { Title } from "../Title/Title"

import "./CartForm.css"


export const CartForm = ({generateOrder, dataForm, handleOnChange}) => {

    let title = "FORMULARIO DE COMPRA"
    let text = "Rellene el formulario a continuación con sus datos para realizar la compra."

    return (
        
        <div className="cart-form-container">

            <Title title={title} text={text}/>

            <form onSubmit={generateOrder} className="cart-form">

                <input className="form-input" type="text" name="nombre" onChange={handleOnChange} value={dataForm.nombre} placeholder="Ingrese su nombre" />
                <input className="form-input" type="text" name="telefono" onChange={handleOnChange} value={dataForm.telefono} placeholder="Ingrese su numero de telefono" />
                <input className="form-input" type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese su email" />
                <input className="form-input" type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Vuelva a ingresar su email" />

                <button className="order-button">Generar orden</button>
            </form>
            
        </div>

    )
}