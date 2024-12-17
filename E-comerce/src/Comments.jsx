function Comments ({detail}) {
    const reviews = detail?.reviews;

    return (
        <seccion>
            <div className="comments_container">
                <p>{detail?.reviews[0].reviewerName} - {detail?.reviews[0].rating}⭐</p>
                <p>{detail?.reviews[0].comment}</p>
            </div>
            <div className="comments_container">
                <p>{detail?.reviews[1].reviewerName} - {detail?.reviews[1].rating}⭐</p>
                <p>{detail?.reviews[1].comment}</p>
            </div>
            <div className="comments_container">
                <p>{detail?.reviews[2].reviewerName} - {detail?.reviews[2].rating}⭐</p>
                <p>{detail?.reviews[2].comment}</p>
            </div>
        </seccion>
    )
}

    export default Comments