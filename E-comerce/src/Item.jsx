import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Item ({items}) {
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={items.thumbnail} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>
                  {items.category}
                </Card.Text>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default Item