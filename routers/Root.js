import * as React from 'react';
import { useReducer,useEffect } from 'react';
import {AsyncStorage} from 'react-native'
import {
 MemoryRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router';
// import {BrowserRouter} from './Router'
import {
  HomeScreen,
  DetailScreen,
  LoginScreen,
  RegisterScreen,
} from '../containers';
import { reducer, initialState } from '../reducers/auth.reducer';
import {checkLogin} from '../actions'

export default function RootRouter(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('RootRouter',state);
  
  useEffect(()=>{
    state.isFirst && checkLogin(dispatch);
  })
  return (
    <Router>
      <Redirect to={state.isLogined?"/home":"/login"} />

      <Switch>
      
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/detail">
          <DetailScreen />
        </Route>
      </Switch>
    </Router>
  );
}
