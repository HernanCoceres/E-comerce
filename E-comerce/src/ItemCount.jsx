import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { cartContext } from './context/cartContext'
import styles from './Modules/ItemCount.module.css'
function itemCount({detail}) {
    const [count, setCount] = useState(1)
    const {addToCart} = useContext(cartContext)
    
    useEffect(() =>{

    }, [count])

    const handleAdd = () => {
        if (count < detail.stock){
            setCount(count + 1)
        }else{count = detail.stock}
    }
    const handleSub = () => {
        if (count >= detail.stock || count > 1){
            setCount(count - 1)
        }else{count = 0}
    }
    
        const handleAddToCart = () => {
        addToCart({...detail, qty: count})
    }
    return (
        <div className={styles.div_count_cart}>
        <Button onClick={handleAddToCart} count={count} className='add_cart' variant="warning">Add to cart:{count}</Button>{' '}
        <Button className={styles.button_plus_cart} variant='danger' onClick={handleSub}>
            -
        </Button>
        <Button className={styles.button_plus_cart} variant='success' onClick={handleAdd}>
            +
        </Button>
        </div>
    )
    
}


export default itemCount;