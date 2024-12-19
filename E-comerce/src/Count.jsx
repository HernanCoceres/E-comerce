import styles from './Modules/ItemCount.module.css'
import Button from 'react-bootstrap/Button'

function Count ({handleAdd, handleAddToCart, handleSub, count}) {
    return(
        <div className={styles.div_count_cart}>
        <Button onClick={handleAddToCart} count={count} className='add_cart' variant="warning">Add to cart:{count}</Button>
        <Button className={styles.button_plus_cart} variant='danger' onClick={handleSub}>
            -
        </Button>
        <Button className={styles.button_plus_cart} variant='success' onClick={handleAdd}>
            +
        </Button>
        </div>
    )
}

export default Count