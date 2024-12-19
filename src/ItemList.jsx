import Row from 'react-bootstrap/Row'
import ItemOrder from './ItemOrder'
function ItemList ({ items }){
    return (
    <Row xs={6} md={4} className="g-4">
        {items.map((items) => (
        <ItemOrder items={items} key={items.id} />
        ))}
      </Row>
    )
}

export default ItemList