import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/UI/Navbar/NavBar";
import Products from "./components/products/Products";
import ShoppingCart from "./components/products/Shopping/ShoppingCart";
import FavoriteCart from "./components/products/Favorite/FavoriteCart";
import UserForm from "./components/user/UserForm";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/shopping" component={ShoppingCart} />
        <Route path="/favorite" component={FavoriteCart} />
        <Route path="/login" component={UserForm} />
      </Switch>
    </>
  );
}

export default App;
