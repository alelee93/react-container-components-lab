// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return(
        <div className='review-list'>
           
            {reviews.map(review => {
               
               return(<div className='review'>
                    <h1>{review.display_title}</h1>
                    <p>{review.summary_short}</p>
                </div>
               )
            })}
        </div>
    )
    
}

export default MovieReviews