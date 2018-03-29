import React, { Component }  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './navigation';
import AboutPage from './about';
import HomePage from './home';
import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState(() => ({authUser})) : this.setState (() => ({authUser: null}));
    });
  }

  render() {
    return(
      <BrowserRouter>
      <div>
        <Navigation/>
        <Route
          exact path={routes.HOME}
          component={() => <HomePage />}
        />
        <Route
          exact path={routes.ABOUT}
          component={() => <AboutPage />}
        />
      </div>
  </BrowserRouter>
    );
  }
}


    
export default App;
