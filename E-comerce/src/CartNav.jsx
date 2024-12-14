import { useContext } from 'react';
import {cartContext} from './context/cartContext'
function CartNav () {
    const {getQty} = useContext(cartContext)
    return (
        <div className="cart_container">
            <p className="count_number">🛒</p>
            <p className="count_number">{getQty()}</p>
        </div>
    )
}

export default CartNav