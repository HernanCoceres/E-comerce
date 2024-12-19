import Row from 'react-bootstrap/Row'
import ItemOrder from './ItemOrder'
import styles from './Modules/ItemList.module.css'
function ItemList ({ items }){
    return (
      <>
      <h2 className={styles.intro}>Welcome to Remini! Discover a universe of carefully selected wines to delight your palate. Our passion for quality and good taste drives us to offer you the best bottles, ideal to accompany your most special moments. Explore our collection and transform every occasion into an unforgettable experience. Bless you!</h2>
      <Row xs={6} md={4} className="g-4">
          {items.map((items) => (
          <ItemOrder items={items} key={items.id} />
          ))}
        </Row></>
    )
}

export default ItemList