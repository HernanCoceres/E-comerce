import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

function ItemOrder ({items}) {
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={items.images} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                  {items.category}
                </Card.Text>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Button variant="warning" as={Link} to={`/item/${items.id}`}>See more</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default ItemOrder