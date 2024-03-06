
import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import { Button } from "react-bootstrap"

export const KeepBuying = () => {

    const {cartList} = useCartContext()

    return (

        <Link to={"/"}>

            {cartList.length != 0 ?
                <Button style={{ background: 'rgb(133, 139, 252)' }}>Continuar comprando</Button>
                :
                <Button style={{ background: 'rgb(133, 139, 252)' }}>Visualizar productos</Button>
            }

        </Link>

    )
}