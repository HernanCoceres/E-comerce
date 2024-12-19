import styles from './Modules/ItemDetail.module.css'
import Button from 'react-bootstrap/Button'
import Comments from './Comments'
import ItemCount from './ItemCount'

function ItemDetail ({ detail, updateStock }) {
    return (
        <div className={styles.div_product}>
            <div>
                <h2 className={`${styles.title_product} ${styles.text}`}>{detail?.title}</h2>
                <img className={styles.img_detail} src={detail?.images} alt={detail?.title}/>
                <h4 className={styles.text}>Reviews</h4>
                <Comments detail={detail}/>
            </div>
            <div className={styles.aside_detail}>
                <p className={styles.text}>
                    {detail?.availabilityStatus} ({detail?.stock}) / Brand: {detail?.brand}
                </p>
                <p className={`${styles.description_detail} ${styles.text}`}>{detail?.description}</p>
                <p className={styles.text}>Rating: {detail?.rating}⭐</p>
                <Button className={styles.add_cart} variant="primary">{detail?.price}$</Button>
                <ItemCount detail={detail} updateStock={updateStock} />
                <div className={styles.article_product}>
                    <p className={styles.text}>About this product:</p>
                    <p className={styles.text}>{detail?.returnPolicy}</p>
                    <p className={styles.text}>{detail?.shippingInformation}</p>
                    <p className={styles.text}>{detail?.contentinliters}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail