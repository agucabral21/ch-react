import React, {} from "react";
import CartIcon from "./CartIcon.js";
import {NavLink} from 'react-router-dom';
import ItemList from "./Item/ItemList.js";
import Cart from "./Cart/Cart.js";
import ItemDetailContainer from "./Item/ItemDetailContainer.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Main(){
    
      return(
        <BrowserRouter>    
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">            
              </li>
              <NavLink to={'/'}>
              <li className="nav-item">            
                  <span className="nav-link">Principal</span>            
              </li>
              </NavLink>              
              <NavLink to={'/cart'}>
              <li className="nav-item">            
                <span className="nav-link"><CartIcon/></span>
              </li>   
              </NavLink> 
              {/**
              <NavLink to={'/item/:id'}>
              <li className="nav-item">
                <span className="nav-link" >Contacto</span>
              </li>
              </NavLink>**/}
            </ul>
            </div>        
            </nav>
            </div>   
        <Switch>
          <Route exact path="/">
            <ItemList/>
          </Route>
          <Route path="/category/:id">
            <ItemList/>          
          </Route>   
          <Route path="/item/:itemId">
            <ItemDetailContainer/>      
          </Route>   
          <Route path="/cart">
            <Cart/>      
          </Route>               
        </Switch>    
      </BrowserRouter>      
    )
}

export default Main;
  
