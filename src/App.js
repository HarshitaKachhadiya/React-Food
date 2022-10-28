import React, { Component } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider";

//class based component

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartIsShown: false,
    };
  }

  showCartHandler() {
    // this.state.cartIsShown = true; //NOT!
    this.setState({ cartIsShown: true });
  }

  hideCartHandler() {
    this.setState({ cartIsShown: false });
  }

  render() {
    return (
      <CardProvider>
        {this.state.cartIsShown && (
          <Cart onClose={this.hideCartHandler.bind(this)} />
        )}
        <Header onShowCart={this.showCartHandler.bind(this)} />
        <main>
          <Meals />
        </main>
      </CardProvider>
    );
  }
}

/* function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
} */

export default App;
