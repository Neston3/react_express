import React, {Component} from "react";
import '../assets/main.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class CreateUser extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    };


    handleInput = (event) => {
        event.persist();
        this.setState({
            first_name: event.target.value
        })
    };

    handleInput_1 = (event) => {
        event.persist();
        this.setState({
            last_name: event.target.value
        })
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

    handleInput_confirm_password = (event) => {
        event.persist();
        this.setState({
            confirm_password: event.target.value
        })
    };

    /*on submit do checkings*/
    handleNewCard = (event) => {
        event.preventDefault();
        if (this.state.confirm_password !== this.state.password) {
            NotificationManager.error('Please check your password');
            return false;
        } else {
            this.props.createNewUser(this.state);
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
                                    <form onSubmit={this.handleNewCard} method="post">

                                        <h3 className="mb-4">SignUp</h3>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" onChange={this.handleInput}
                                                   value={this.state.first_name} placeholder="First name" required/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control"
                                                   onChange={this.handleInput_1}
                                                   value={this.state.last_name} placeholder="Last name" required/>
                                        </div>
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
                                        <div className="input-group mb-3">
                                            <input type="password" className="form-control"
                                                   onChange={this.handleInput_confirm_password}
                                                   value={this.state.confirm_password}
                                                   placeholder="Confirm Password"
                                                   required/>
                                        </div>

                                        <button type="submit" className="btn btn-primary shadow-2 mb-10">
                                            SIGNUP
                                        </button>
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

export default CreateUser;