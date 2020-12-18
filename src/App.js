import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartCtxProvider} from "./contexts/CartContext";
import Navigation from "./components/Navigation";
import ItemList from "./components/Item/ItemList";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Item/ItemDetailContainer.js";

function App() {
  return (
    <CartCtxProvider>
      <BrowserRouter>    
        <Navigation/> 
          
        <Switch>        
          <Route exact path="/"> <ItemList/> </Route>         
          <Route path="/category/:id" component={ItemList}/>           
          <Route path="/item/:itemId">
            <ItemDetailContainer/>
          </Route>          
          <Route path="/cart" component={Cart}/>
        </Switch> 
       
      </BrowserRouter>      
    </CartCtxProvider> 
  );
}

export default App;
