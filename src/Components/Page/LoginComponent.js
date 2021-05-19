import React, { Component } from 'react'
import Login from '../../Models/Login'
import axios from 'axios';

export default class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            login : new Login(),
            error: {
                usernameError: "",
                passwordError: "",
                invalidCredentials: ""
            }
        }
    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.login.username) {
            error.usernameError = "Username Is Required";
            flag = false
        }
        if (!this.state.login.password) {
            flag = false;
            error.passwordError = "Password Is Required";
        }
        this.setState({ error: error })
        return flag;
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = this.validate();
        if (!isValid) {
            return false;
        }

        axios.post(`http://localhost:9090/movies-api/login`, this.state.login)
        .then((result)=>{
            if(result.data.username != null){
            this.setState({login:result.data})
            sessionStorage.setItem("username", this.state.login.username)
            sessionStorage.setItem("role", this.state.login.role)
            console.log(sessionStorage.getItem("role"))
            this.props.history.push('/movies')
            console.log(this.state.login)
        } else {
            this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
    
        }
        }).catch(this.setState({error: {invalidCredentials:"Invalid credentials"}}))
    }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        <span className="badge badge-dark">Login</span>
                    </h1>
                    <div className="form-group mr2">
                        <div className="alert-danger">{this.state.error.usernameError}</div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={this.state.login.username}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, username: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.passwordError}</div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.login.password}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, password: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.invalidCredentials}</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </div>
        )
    }
}
