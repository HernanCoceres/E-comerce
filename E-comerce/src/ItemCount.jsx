import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { cartContext } from './context/cartContext'
function itemCount({detail}) {
    const [count, setCount] = useState(0)
    const {addToCart} = useContext(cartContext)
    useEffect(() =>{

    }, [count])

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    return (
        <div className='div_count_cart'>
        <Button count={count} className='add_cart' variant="warning">Add to cart:{count+1}</Button>{' '}
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