import React from "react";
// import ProductList from "./containers/ProductList";
import Currency from "./components/Currency";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import Footer from "./components/Footer";
import CartIcon from "./components/CartIcon";

interface AppState {
  currencyCode: string;
  darkMode: boolean;
}
interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  state = {
    currencyCode: "INR",
    darkMode: false,
  };

  render() {
    let { darkMode } = this.state;
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={darkMode}>
          <Header>
            <ThemeSwitch
              changeTheme={(theme) => this.setState({ darkMode: theme })}
            />
            <Currency />
            <CartIcon />
          </Header>
          <AppRouter />
          {/* <ProductList selectedCode={currencyCode} /> */}
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
