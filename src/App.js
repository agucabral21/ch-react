import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartCtxProvider } from "./contexts/CartContext";
import Navigation from "./components/Navigation/Navigation";
import ItemList from "./components/Item/ItemList";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Item/ItemDetailContainer.js";
import AdminConsole from "./components/Admin/AdminConsole";

function App() {
  return (
    <CartCtxProvider>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/"> <ItemList /> </Route>
          <Route path="/category/:catId"> <ItemList /></Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={AdminConsole} />
        </Switch>

      </BrowserRouter>
    </CartCtxProvider>
  );
}

export default App;
