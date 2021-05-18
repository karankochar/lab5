import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FIndMovie extends Component {

    constructor(props){
        super(props);
        this.state={
            genre:''
        }
    }
  
    render() {
        return (
            <div>
                <h2>Search Movie</h2>
                <div class="form-group">
                        <label for="genre">Select genre</label>
                        <select class="form-control" id="genre" value={this.state.genre} 
                        onChange={(e)=>{this.setState({genre:e.target.value})}}>
                            <option value=''>Select a genre</option>
                            <option value='Drama'>Drama</option>
                            <option value='Fiction'>Fiction</option>
                            <option value='Satire'>Satire</option>
                        </select>
                    </div>
                <Link className='btn' to={`/movies/search/${this.state.genre}`}>Search</Link>
            </div>
        )
    }
}
