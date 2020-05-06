import React, {Component} from 'react';
// import MainContainer from './MainContainer';
import CreateUser from '../components/CreateUser'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class App extends Component {

    state = {user_register_response: ""};

    createNewUser = (input) => {
        fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(input)
        }).then(res => res.text())
            .then(res => this.setState({user_register_response: res}));
    };

    check = function(message){
        if(message ==='success'){
            NotificationManager.success('User created successfully!');
        }else if (message === 'failed'){
            NotificationManager.error('User exists!');
        }
    };

    render() {
        return (
            <div className="App">
                <CreateUser createNewUser={this.createNewUser}/>
                <NotificationContainer/>
                {this.check(this.state.user_register_response)}

            </div>
        );
    }
}

export default App;
