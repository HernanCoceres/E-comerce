import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { Container } from "react-bootstrap"
import { getProducts } from "../firebase/db"

function ItemListContainer () {
    const [items, setItems] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        getProducts()
            .then(products => {
                if (id) {
                    const filteredProducts = products.filter(product => product.category === id)
                    setItems(filteredProducts)
                } else {setItems(products);}
            })
        }, [id])
    
     return (
        <Container className="back"><ItemList items={items}/></Container>
    )
}

export default ItemListContainer