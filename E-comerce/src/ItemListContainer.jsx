import { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer () {
    const [items, setItems] = useState([])

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const parsed = await res.json()
        setItems(parsed.products)
    }

    useEffect(() => {
     getProducts()}, [])
    
     return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer