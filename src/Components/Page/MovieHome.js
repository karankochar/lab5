import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieHome extends Component {
    render() {
        return (
            <div>
                <Link className='btn' to={`/movies/add`}> Add Movie</Link> <br/>
                <Link className='btn' to={`/movies/search`}> Search Movie By Category</Link>
            </div>
        )
    }
}
