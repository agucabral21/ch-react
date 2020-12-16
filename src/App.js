import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartCtxProvider} from "./contexts/CartContext";
import Navigation from "./components/Navigation";
import ItemList from "./components/Item/ItemList";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Item/ItemDetailContainer.js";
import {FirebaseContext} from './components/FirebaseDB/FirebaseDS';

function App() {
  return (
    <CartCtxProvider>
      <BrowserRouter>    
        <Navigation/> 
        <FirebaseContext.Consumer>{ firebase => (     
        <Switch>        
          <Route exact path="/"> <ItemList DB={firebase}/> </Route>         
          <Route path="/category/:id" component={ItemList}/>           
          <Route path="/item/:itemId" component={ItemDetailContainer}/>          
          <Route path="/cart" component={Cart}/>
        </Switch> 
         )}</FirebaseContext.Consumer>       
      </BrowserRouter>      
    </CartCtxProvider> 
  );
}

export default App;
