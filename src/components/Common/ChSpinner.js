import React from "react";

import { Spinner, Row, Col } from "react-bootstrap";

function ChSpinner({ size }) {
  return (
    <Row>
      <Col className="justify-content-md-center">
        <h2>Cargando</h2>
        <Spinner size={size} animation={"border"}></Spinner>
      </Col>
    </Row>
  );
}

export default ChSpinner;
