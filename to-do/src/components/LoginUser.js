import React, {Component} from "react";
import '../assets/main.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Link, Redirect} from "react-router-dom";


class LoginUser extends Component {
    state = {
        email: "",
        password: "",
    };


    handleInput_email = (event) => {
        event.persist();
        this.setState({
            email: event.target.value
        })
    };

    handleInput_password = (event) => {
        event.persist();
        this.setState({
            password: event.target.value
        })
    };

    /*on submit do checkings*/
    handleNewLogin = (event) => {
        event.preventDefault();
        this.loginUser(this.state);
    };

    /*send data url*/
    loginUser = (input) => {
        fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(input)
        }).then(res => res.text())
            .then(res => this.setState({user_register_response: res})).then(this.checkError);
    };

    checkError = () => {

        switch (this.state.user_register_response) {
            case 'success_login':
                NotificationManager.success('welcome!');
                this.props.authentication(true);
                return <Redirect to='/home'  />;
            case 'user_not_found':
                NotificationManager.error('User not found, please register!');
                break;
            case 'failed_login':
                NotificationManager.error('Please check your password!');
                break;
            default:

        }

    };

    render() {
        return (
            <div className="row">
                <div className="col-md-12" align="center">
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-white rounded register_form">
                            <div className="card-body text-center">
                                <div className="col-12">
                                    <form onSubmit={this.handleNewLogin} method="post">

                                        <h3 className="mb-4">SignIn</h3>

                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control"
                                                   onChange={this.handleInput_email}
                                                   value={this.state.email} placeholder="Email" required/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="password" className="form-control"
                                                   onChange={this.handleInput_password}
                                                   value={this.state.password} placeholder="Password" required/>
                                        </div>

                                        <button type="submit" className="btn btn-primary shadow-2 mb-10">
                                            SIGNIN
                                        </button>
                                        <div>
                                            <Link to='/'>don't have an account? signup</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }

}

export default LoginUser;