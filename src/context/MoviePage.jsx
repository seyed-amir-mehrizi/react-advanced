import React, { Component } from 'react'
import MovieList from './MovieList'

export class MoviePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <MovieList />
            </div>
        )
    }
}

export default MoviePage
