
import Item from "../Item/Item"
import { memo } from "react"

const ItemList = memo(({ productos }) => {

    return (

        <div className="contenedorItemList">

            <div className="contenedorItemList">
                {productos.map(producto => <Item key={producto.id} producto={producto} />)}
            </div>

        </div>

    )
})

export default ItemList