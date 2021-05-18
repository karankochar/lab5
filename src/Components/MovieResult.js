import React, { Component } from 'react'
import axios from 'axios';

export default class MovieResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies:[]
        }
    }
    componentDidMount(){
        let movieGenre = this.props.match.params.genre;
        axios.get(`http://localhost:9090/movies-api/movies/byCategory/${movieGenre}`)
        .then((result)=>{
            this.setState({movies: result.data})
            console.log(this.state.movies)
        }).catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                
                { this.state.movies.length>0 ? (
                                <table className="table table-bordered">
                                    <thead>
                                        <th>Movie Id</th>
                                        <th>Movie name</th>
                                        <th>Movie Rating</th>
                                
                                    </thead>
                                    <tbody>
                                        {this.state.movies.map((s)=>(
                                             <tr>
                                             <td>{s.moviesId}</td>
                                             <td>{s.moviesName}</td>
                                             <td>{s.moviesRating}</td>
                                         </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            ) : null
                        }
               
            </div>
        )
    }
}
