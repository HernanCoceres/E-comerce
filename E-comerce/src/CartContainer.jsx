import { useContext } from 'react'
import { cartContext } from './context/cartContext'
import Cart from './Cart';

function CartContainer (){
    const { cart } = useContext(cartContext);
    const getTotalPrice = () => {
        return cart.reduce((acc, product) => acc + product.price * product.qty, 0);
      };

    return (
        <Cart getTotalPrice={getTotalPrice}></Cart>
    )
  }

export default CartContainer