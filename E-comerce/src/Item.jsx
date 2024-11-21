import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'

function Item ({items}) {
    return (
        <Col>
            <Card className='cards'>
              <Card.Img variant="top" src={items.thumbnail} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                  {items.category}
                </Card.Text>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/item/${items.id}`}>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default Item