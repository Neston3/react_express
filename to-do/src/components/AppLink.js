import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LoginUser from "./LoginUser";
import CreateUser from "./CreateUser";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class AppLink extends Component {

    state = {
        isAuthenticated: false
    };

    // PrivateRoute = ({component: Component, ...rest}) => (
    //     <Route {...rest} render={(props) => (
    //         this.fake_Auth.isAuthenticated === true
    //             ? <Component {...props} />
    //             : <Redirect to='/login'/>
    //     )}/>
    // );


    handler = (boolean) => {
        this.setState({
            isAuthenticated: boolean
        });
        this.check_authentication();
    };

    check_authentication = () => {
        if (this.state.isAuthenticated === false){
            console.log('login');
            return <Redirect to='/login'/>;
        }else{
            console.log('home');
            // appHistory.push('/home');
            // return <Redirect to='/home'/>;
        }
    };

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={CreateUser}/>
                    <Route exact path='/login' render={(props) => <LoginUser {...props} authentication={this.handler}/>}/>
                    <Route exact path='/home' render={() => {
                        this.check_authentication();
                    }
                    }/>
                </Switch>
            </main>
        )
    };

}

export default AppLink
