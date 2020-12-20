import React, { useContext } from "react";
import Cart from "./Cart";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import Checkout from "./Checkout";

function CartView() {
  const cartCtx = useContext(CartContext);
  return (
    <Container>
      {cartCtx.cart.items.length === 0 ? (
        <h1>El carrito esta vacio.</h1>
      ) : (
        <Row>
          <Col sm={8}>
            <Cart />
          </Col>
          <Col sm={4}>
            <Checkout />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartView;
