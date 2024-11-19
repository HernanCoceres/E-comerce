import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Product ({detail}) {
    const review1 = detail?.reviews[0].comment;
    console.log(detail);




    
    return (
     <div className="div_product">
        <section>
            <h2>{detail?.title}</h2>
            <img className="img_detail" src={detail?.images[0]}/>
            <h3>Reviews</h3>
            <p>{review1}</p>
        </section>
        <section className="aside_detail">
            <p>{detail?.availabilityStatus} / Brand: {detail?.brand}</p>
            <p className="description_detail">{detail?.description}</p>
            <p>Rating: {detail?.rating}⭐</p>
            <Button variant="primary">{detail?.price}$</Button>{' '}
            <Button className='buy' variant="success">Buy</Button>{' '}
            <article className='article_product'>
            <p className='about_product'>About this product:</p>
            <p className='about_product'>{detail?.returnPolicy}</p>
            <p className='about_product'>{detail?.shippingInformation}</p>
            <p className='about_product'>{detail?.warrantyInformation}</p>
            <p className='about_product'>Weight:{detail?.weight} lbs</p>
            </article>
        </section>
     </div>
    )
}

export default Product
