import { useContext} from 'react'
import { cartContext } from '../context/cartContext'
import Button from 'react-bootstrap/Button'
import styles from'../Modules/Cart.module.css'
import CheckOutFormDate from './CheckOutFormDate'

function Cart ({getTotalPrice}){
    const { cart, getQty , removeFromCart, clearCart} = useContext(cartContext)
    
    return(
  <>
        <h1 className={styles.title_cart}>Cart to buy...</h1>
        <div className={styles.container_cart}>
        {cart.length > 0 ? (
          <ul className={styles.ul_cart}>
            {cart.map((product, index) => (
              <li className={styles.li_cart} key={index}>
                <Button className={styles.X} onClick={() => removeFromCart(product.id)} variant='danger'>X</Button>
                <div className={styles.div_cart_img}>
                 <img className={styles.img_cart} src={product.images} alt="image product" />
                </div>
                <div>
                <p>{product.title}</p>
                <p>Quantity:{product.qty}</p>
                <p>Price:${product.price}</p>
                </div>
              </li>
            ))}
          </ul>) : (<p>Cart is empty</p>)}
      </div>
      <h3 className={styles.text}>Quantity of products: {getQty()}</h3>
      <Button className={styles.clear_cart} onClick={clearCart} variant="danger">Clear cart</Button>
      <h3 className={styles.text}>Price total: ${getTotalPrice().toFixed(2)}</h3>
      <CheckOutFormDate clearCart={clearCart}/>
</>)
}

export default Cart