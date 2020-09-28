import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainBody from './Components/MainBody/MainBody';
import UserPhase from './Components/UserPhase/UserPhase';
import ShowLocation from './Components/ShowLocation/ShowLocation';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      
        <Router >
        
          <Switch>
            <Route exact path="/">
              <MainBody></MainBody>
            </Route>

            <Route path="/userPhase">
              <UserPhase></UserPhase>
            </Route>
            <PrivateRoute path="/showLocation">
              <ShowLocation></ShowLocation>
            </PrivateRoute>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      

    </UserContext.Provider>
  );
}

export default App;
