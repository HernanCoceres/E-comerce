import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'
import styles from './Modules/Item.module.css'

function Item ({items}) {
    return (
        <Col>
            <Card className={styles.cards}>
              <Card.Img variant="top" src={items.thumbnail} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                  {items.category}
                </Card.Text>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Button variant="warning" as={Link} to={`/item/${items.id}`}>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default Item