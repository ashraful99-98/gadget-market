import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Shop from './Shop/Shop';
// import OrderReview from './Component/OrderReview/OrderReview';
function App() {
  return (
    <div className="App">
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home.html">
            <Home></Home>
          </Route>
          <Route path="/shop.html">
            <Shop></Shop>
          </Route>
          {/* <Route path="/orderReview.html">
            <OrderReview></OrderReview>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
