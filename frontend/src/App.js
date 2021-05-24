import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
    <Container>
    <Route path="/" exact component = {HomeScreen}></Route>
    <Route path="/product/:id" exact component = {ProductScreen}></Route>
    <Route path="/cart/:id?" exact component = {CartScreen}></Route>
    </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
