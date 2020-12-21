import React from "react";
//import CartContext from "../../contexts/CartContext";
import { ButtonGroup, Button, Container, Row } from "react-bootstrap";
import { storeTestData } from "../FirebaseDB/FirebaseQueries";
import ChSpinner from "../Common/ChSpinner";
import OrderList from "./OrderList";

function AdminConsole() {
  return (
    <Container>
      <h2>Lista de Ordenes</h2>
      <br />
      <OrderList></OrderList>
    </Container>
  );
}

export default AdminConsole;
