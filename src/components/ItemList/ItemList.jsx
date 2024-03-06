import Item from "../Item/Item"
import { memo } from "react"

import "./ItemList.css"

const ItemList = memo(({ productos }) => {

    return (

        <div className="item-list">

            {productos.map(producto => <Item key={producto.id} producto={producto} />)}

        </div>

    )
})

export default ItemList