import { Route, Switch } from 'react-router';
import Home from './Home';
import SignIn from './Sign-in';
import SignUp from './Sign-up';
import './styles.css';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/sign-in' component={SignIn}></Route>
    <Route exact path='/sign-up' component={SignUp}></Route>
  </Switch>
);

export default Main;
