import { cartContext } from "./cartContext";
import { useState } from "react";
function cartProvider ({children}) {
const [cart, setCart] = useState([])
const addToCart = products => {
    setCart([...cart, products])
}
const getQty = () => { 
    const qtyOnly = cart.map(prod => prod.qty)
    const total = qtyOnly.reduce((acc, current) => acc + current, 0)
    return total
}
const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  }

  const clearCart = () => {
    setCart([]);
  }
    return (
        <cartContext.Provider value={{cart, addToCart, getQty, removeFromCart, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartProvider;