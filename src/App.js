import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Services from './pages/Home/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/servicedetail/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
