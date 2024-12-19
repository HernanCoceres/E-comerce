import styles from './Modules/Comments.module.css'

function Comments ({detail}) {
    return (
        <div>
            <div className={`${styles.comments_container} ${styles.text}`}>
                <p>{detail?.reviews[0]} - {detail?.reviews[1]}⭐</p>
                <p>{detail?.reviews[2]}</p>
            </div>
            <div className={`${styles.comments_container} ${styles.text}`}>
                <p>{detail?.reviews[3]} - {detail?.reviews[4]}⭐</p>
                <p>{detail?.reviews[5]}</p>
            </div>
            <div className={`${styles.comments_container} ${styles.text}`}>
                <p>{detail?.reviews[6]} - {detail?.reviews[7]}⭐</p>
                <p>{detail?.reviews[8]}</p>
            </div>
        </div>
    )
}

    export default Comments