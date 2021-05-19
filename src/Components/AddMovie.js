import React, { Component } from 'react'
import Movies from '../Models/Movies'
import axios from 'axios';
import './AddMovie.css'

export default class AddMovie extends Component {

    constructor(props){
        super(props);
        this.state={
            movie : new Movies()
        }
    }

    render() {
        return (
            <div>
                <h1>Add Movie</h1>
                <form>
                    <div class="form-group">
                        <label for="id">Movie ID</label>
                        <input type="text" 
                        class="form-control" 
                        id="id" 
                        placeholder="Enter Movie Id"
                        value={this.state.movie.moviesId}
                        onChange={(e)=>{this.setState({movie: {...this.state.movie, moviesId: e.target.value}})}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Movie Name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Enter Movie Name"
                        value={this.state.movie.moviesName}
                        onChange={(e)=>{this.setState({movie:{...this.state.movie, moviesName: e.target.value}})}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="rating">Rating</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        placeholder="Enter rating"
                        value={this.state.movie.moviesRating}
                        onChange={(e)=>{
                            this.setState({movie: {...this.state.movie, moviesRating: e.target.value}})
                            
                        }}
                        />
                    </div>
                    <div class="form-group">
                        <label for="genre">Select genre</label>
                        <select class="form-control" id="genre" value={this.state.movie.moviesGenre} 
                        onChange={(e)=>{this.setState({movie: {...this.state.movie, moviesGenre: e.target.value}})}}>
                            <option value=''>Select a genre</option>
                            <option value='Drama'>Drama</option>
                            <option value='Fiction'>Fiction</option>
                            <option value='Satire'>Satire</option>
                        </select>
                    </div>
                    <button type='submit' className='btn'
                        onClick={()=>{ 
                            if (sessionStorage.getItem("role") !== "ROLE_ADMIN") {
                            alert('Unauthorized Access');
                            this.props.history.push("/movies");
                          } else{
                            axios.post(`http://localhost:9090/movies-api/movies`, this.state.movie)
                            .then((result) => {
                                alert('Movie is added');
                                this.props.history.push('/');
                            })
                        }}}
                        >Submit</button>
                </form>
            </div>
        )
    }
}
