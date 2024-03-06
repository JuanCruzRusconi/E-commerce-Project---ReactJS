import { useCartContext } from "../../contexts/CartContext"

import "./CartWidget.css"

export const CartWidget = () => {
    
    const {totalAmount} = useCartContext()

    return (

        <div>

            <h3 className="cart-widget">CART {totalAmount() != 0  && totalAmount()}</h3>
            
        </div>
        
    )
}