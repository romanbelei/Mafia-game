import HomePage from 'pages/HomePage';
import TablePage from 'pages/TablePage';
import LoginPage from 'pages/LoginPage';
import InputPage from 'pages/InputPage';
import RegisterPage from 'pages/RegisterPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/table" component={TablePage} />
      <Route exact path="/input/:table" component={InputPage} />
      <Route exact path="/game" component={HomePage} />
    </Switch>
  );
}

export default App;
