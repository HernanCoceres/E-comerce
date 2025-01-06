import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import Count from './Count';

function ItemCount({ detail, updateStock }) {
    const [count, setCount] = useState(0)
    const [stock, setStock] = useState(0)
    const { addToCart } = useContext(cartContext)

    useEffect(() => {
        if (detail) {
            setStock(detail.stock)
        }
    }, [detail])

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleSub = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        if (stock >= count) {
            addToCart({ ...detail, qty: count })
            const newStock = stock - count
            setStock(newStock)
            updateStock(newStock)
        } else{}
    }

    return (
        <Count
            handleAdd={handleAdd}
            handleAddToCart={handleAddToCart}
            handleSub={handleSub}
            count={count}
            stock={stock}
        />
    )
}

export default ItemCount;