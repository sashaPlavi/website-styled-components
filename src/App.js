import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homePage/Home';
import Signup from './pages/singup/Signup';
import Services from './pages/services/Services';
import Products from './pages/products/Products';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/sign-up" exact component={Signup}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
