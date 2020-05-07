import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import AppLink from "../components/AppLink";


class App extends Component {

    // state ={
    //     authentication: false
    // };
    //
    // check_authentication = (boolean)=>{
    //   this.state.authentication =  boolean;
    // };

    render() {
        return (
            <div className="App">
                <AppLink/>
            </div>
        );
    }
}

export default App;
