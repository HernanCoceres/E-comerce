import Card from 'react-bootstrap/Card';
function ItemDetail ({detail}){
    return (
      <Card className='detail_card'>
      <Card.Img className='detail_img' variant="top" src={detail?.images[0]} />
      <Card.Body>
        <Card.Title>{detail?.title}</Card.Title>
        <Card.Text>
          {detail?.description}
        </Card.Text>
        <price className="price">{detail?.price}$</price>
      </Card.Body>
      </Card>
  );
}

export default ItemDetail;