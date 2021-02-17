import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    updateSearch = (event) => {
       // debugger
        this.setState({searchTerm: event.target.value})
        
    }

    handleSubmit(){
        
        
        this.getData()
    }

    getData(e){
        e.preventDefault()
        fetch(`${URL}`)
        .then(response => response.json())
        .then(reviewsData => this.setState({ reviews: reviewsData.results}))
    }


    render(){
        return(
        <div>
            "SearchableMovieReviewsContainer"
            <form onSubmit={this.getData}>
            <input onChange={this.updateSearch}></input>
            <button type="submit">Search</button>
            </form>  
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}