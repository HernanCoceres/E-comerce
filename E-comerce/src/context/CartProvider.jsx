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
    return (
        <cartContext.Provider value={{cart, addToCart, getQty}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartProvider;