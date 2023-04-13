import "./App.css";
import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./component/Home";
import Products from "./component/Products";
import Header from "./component/layout/Header";
import ProductDetails from "./component/ProductDetails";
import Login from "./component/Login";
import Orders from "./component/Orders";
// import YourPrime from "./component/YourPrime";
import NotFound from "./component/NotFound";
import ShoppingContext from "./component/context/shopping/ShoppingContext";
import { auth } from "./component/Firebase";
import Checkout from "./component/Checkout";
import Payment from "./component/Payment";
// import { useEffect } from "react";
// import AuthContext from "./component/context/authContext";

const promise = loadStripe(
  "pk_test_51MlsQZA5KUVkF7qQU45zyPsMqJppmAk3GloWnS0Ug0kmbgMnQXT0wmU2mBvTmWD6pxPLObJbOqfJbsSsY4cHMg2T00YP7VQHJv"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;


