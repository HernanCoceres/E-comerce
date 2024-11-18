import Row from 'react-bootstrap/Row';
import Item from './Item';
function ItemList ({ items }){
    return (
    <Row xs={6} md={4} className="g-4">
        {items.map((items) => (
        <Item items={items} key={items.id} />
        ))}
      </Row>
    )
}

export default ItemList