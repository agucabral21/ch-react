import React from "react";
import CartIcon from "../CartIcon.js";
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink activeClassName="active" exact="true" className="navbar-brand nav-item" to={"/"}>
         CoderStore
        </NavLink>     
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a href="/" className="nav-link dropdown-toggle"  data-toggle="dropdown" >
              Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink activeClassName="active" className="nav-item dropdown-item" to={"/category/samsung"}>
               Samsung
              </NavLink >
              <NavLink activeClassName="active" className="nav-item dropdown-item" to={"/category/apple"}>
               Apple
              </NavLink >
              <NavLink activeClassName="active" className="nav-item dropdown-item" to={"/category/xiaomi"}>
               Xiaomi
              </NavLink >
              <NavLink exact="true" activeClassName="active" className="nav-item dropdown-item" to={"/"}>
                Todo
              </NavLink >
            </div>
          </li>
          <NavLink activeClassName="active" className="nav-item nav-link" to={"/cart"}>
              <CartIcon />
          </NavLink>
          <NavLink activeClassName="active" className="nav-item nav-link" to={"/admin"}> 
                Admin
          </NavLink>            
          </ul>
        </div>
      </nav>


    </div>
  );
}

export default Navigation;
