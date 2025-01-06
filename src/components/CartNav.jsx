import { useContext } from 'react';
import {cartContext} from '../context/cartContext'
import styles from '../Modules/CartNav.module.css'
function CartNav () {
    const {getQty} = useContext(cartContext)
    return (
        <div className={styles.cart_container}>
            <p className={styles.count_number}>🛒</p>
            <p className={styles.count_number}>{getQty()}</p>
        </div>
    )
}

export default CartNav