import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";

function ItemListContainer () {
    const [items, setItems] = useState([])
    const {id} = useParams()
    const allProducts = 'https://dummyjson.com/products'
    const catergoyProducts = `https://dummyjson.com/products/category/${id}`

    useEffect(() => {
    fetch(id ? catergoyProducts : allProducts)
    .then(res => res.json())
    .then(res => setItems(res.products))
}, [id, catergoyProducts]);
    
     return (
        <Container className="back"><ItemList items={items}/></Container>
    )
}

export default ItemListContainer