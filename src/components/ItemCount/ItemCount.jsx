import { Button } from "react-bootstrap"
import { useCounter } from "../../hooks/useCounter"
import { Title } from "../Title/Title"

import "./ItemCount.css"

const ItemCount = ({initial=1, stock=10, onAdd}) => {

  const {counter, handleAdd, handleSubtract} = useCounter(initial, 1, stock)

  let title = "AGREGAR AL CARRITO"

    return (
        
        <div className="counter-container">

            <Title title={title} />
            <div className="counter-button">
                <Button style={{ background: 'rgb(133, 139, 252)' }} onClick={handleAdd}>Añadir producto</Button>
                <Button style={{ background: 'rgb(133, 139, 252)' }} onClick={handleSubtract}>Restar producto</Button>
                <Button style={{ background: 'rgb(133, 139, 252)' }} onClick={() => { onAdd(counter) }}>Agregar al carrito {counter}</Button>
            </div>

        </div>

    )
}

export default ItemCount