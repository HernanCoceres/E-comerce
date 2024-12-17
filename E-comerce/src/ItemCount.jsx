import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { cartContext } from './context/cartContext'
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
        <div className='div_count_cart'>
        <Button onClick={handleAddToCart} count={count} className='add_cart' variant="warning">Add to cart:{count}</Button>{' '}
        <Button className='button_cart' variant='danger' onClick={handleSub}>
            -
        </Button>
        <Button className='button_cart' variant='success' onClick={handleAdd}>
            +
        </Button>
        </div>
    )
    
}


export default itemCount;