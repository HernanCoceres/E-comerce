import { cartContext } from "./cartContext";
import { useState } from "react";
function cartProvider ({children}) {
const [cart, setCart] = useState([])
const addToCart = products => {
    setCart([...cart, products])
}
    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartProvider;