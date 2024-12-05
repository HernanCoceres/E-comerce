import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Comments from './Comments';
import ItemCount from './ItemCount';

function Product ({detail}) {
    return (
     <div className="div_product">
        <seccion>
            <h2>{detail?.title}</h2>
            <img className="img_detail" src={detail?.images[0]}/>
            <h4>Reviews</h4>
            <Comments detail={detail}/>
        </seccion>
        <seccion className="aside_detail">
            <p>{detail?.availabilityStatus} / Brand: {detail?.brand}</p>
            <p className="description_detail">{detail?.description}</p>
            <p>Rating: {detail?.rating}⭐</p>
            <Button className='add_cart' variant="primary">{detail?.price}$</Button>{' '}<br/>
            <ItemCount detail ={detail}/>
            <article className='article_product'>
            <p className='about_product'>About this product:</p>
            <p className='about_product'>{detail?.returnPolicy}</p>
            <p className='about_product'>{detail?.shippingInformation}</p>
            <p className='about_product'>{detail?.warrantyInformation}</p>
            <p className='about_product'>Weight:{detail?.weight} lbs</p>
            </article>
        </seccion>
     </div>
    )
}

export default Product
