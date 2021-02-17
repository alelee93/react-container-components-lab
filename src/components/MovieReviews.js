// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    
        <div className='review-list'>
           
            {reviews.map(review => {
               return(
                <div>
                    <h1>{review.display_title}</h1>
                    <h1>{review.summary_short}</h1>
                </div>
               )
            })}
        </div>
      
    
}

export default MovieReviews