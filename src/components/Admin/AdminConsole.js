import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { ButtonGroup, Button, Container, Row } from "react-bootstrap";
import { storeTestData } from "../FirebaseDB/FirebaseQueries";
import ChSpinner from "../Common/ChSpinner";

function AdminConsole() {
  const cartCtx = useContext(CartContext);
  return (
    <Container>
      <h2>Opciones</h2>
      <br />
      <ButtonGroup>
        <Button onClick={storeTestData}>CargarBase con Datos defecto</Button>{" "}
      </ButtonGroup>
      <Row>
        <ChSpinner size="bg" />
      </Row>
    </Container>
  );
}

export default AdminConsole;
