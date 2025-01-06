import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProducts } from "../firebase/db"

function ItemDetailContainer () {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProducts()
            .then(products => {
                const selectedProduct = products.find(product => product.id === id)
                setDetail(selectedProduct)})}, [id])
    
                const updateStock = (newStock) => {
                setDetail((prevDetail) => ({...prevDetail, stock: newStock})
            )
    }

    return ( <ItemDetail detail={detail} updateStock={updateStock} />)
}

export default ItemDetailContainer