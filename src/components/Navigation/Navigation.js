import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

import { Container } from "react-bootstrap";

function Navigation() {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          activeClassName="active"
          exact={true}
          className="navbar-brand nav-item"
          to={"/"}
        >
          CoderStore
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Categorias
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  activeClassName="active"
                  className="nav-item dropdown-item"
                  to={"/category/samsung"}
                >
                  Samsung
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item dropdown-item"
                  to={"/category/apple"}
                >
                  Apple
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-item dropdown-item"
                  to={"/category/xiaomi"}
                >
                  Xiaomi
                </NavLink>
                <NavLink
                  exact={true}
                  activeClassName="active"
                  className="nav-item dropdown-item"
                  to={"/"}
                >
                  Todo
                </NavLink>
              </div>
            </li>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={"/cart"}
            >
              <i className="fa fa-shopping-cart"></i>{" "}
              <span className="badge badge-dark">
                {cartCtx.cart.totalItems}
              </span>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={"/admin"}
            >
              Admin
            </NavLink>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Navigation;
