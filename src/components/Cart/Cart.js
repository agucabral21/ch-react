import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";
import { Container } from "react-bootstrap";

function Cart() {
  const cartCtx = useContext(CartContext);

  function generateCartItems(cartItemsArray) {
    return cartItemsArray.map((iCart) => {
      return <CartItem key={iCart.item.id} cartItem={iCart} />;
    });
  }

  return (
    <Container>
      <div className="table-responsive">
        {cartCtx.cart.items.length === 0 ? (
          <h1>El carrito esta vacio.</h1>
        ) : (
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>{generateCartItems(cartCtx.cart.items)}</tbody>
          </table>
        )}
      </div>
    </Container>
  );
}

export default Cart;
