import { useContext, useState, useEffect} from 'react'
import { cartContext } from './context/cartContext'
import Button from 'react-bootstrap/Button';

function Cart ({getTotalPrice}){
    const { cart, getQty , removeFromCart, clearCart} = useContext(cartContext);
    
    return(
        <>
        <h1 className='title_cart'>Cart to buy...</h1>
        <div className='container_cart'>
        {cart.length > 0 ? (
          <ul className='ul_cart'>
            {cart.map((product, index) => (
              <li className='li_cart' key={index}>
                <Button className='X' onClick={() => removeFromCart(product.id)} variant='danger'>X</Button>
                <div className='div_cart_img'>
                 <img className='img_cart' src={product.thumbnail} alt="image product" />
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
      <h3>Quantity of products: {getQty()}</h3>
      <Button className='clear_cart' onClick={clearCart} variant="danger">Clear cart</Button>
        <h3>Price total: ${getTotalPrice().toFixed(2)}</h3>
        <Button className='button_cart' variant='success' onClick={clearCart}>Buy</Button>
        </>
    )
}

export default Cart