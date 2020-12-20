import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Alert } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { storeOrder } from "../FirebaseDB/FirebaseQueries";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mailCheck, setMailCheck] = useState("");
  const [errors, setErrors] = useState([]);
  const [phone, setPhone] = useState("");
  const [storeResult, setStoreResult] = useState("hide");

  const checkErrors = () => {
    console.log(mailCheck);
    if (mailCheck !== mail) {
      if (!errors.includes("mailCheck")) setErrors([...errors, "mailCheck"]);
    } else {
      console.log("quito");
      setErrors(errors.filter((e) => e !== "mailCheck"));
    }
  };

  const showResult = (type) => {
    setStoreResult(type);
    setTimeout(() => setStoreResult("hide"), 5000);
  };

  const checkout = (evt) => {
    checkErrors();
    console.log(errors);

    storeOrder({
      ...cartCtx.cart,
      buyer: {
        name: name,
        mail: mail,
        phone: phone,
      },
    })
      .then((doc) => {
        showResult("success");
      })
      .catch((error) => {
        console.error(error);
      });

    evt.preventDefault();
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <Form onSubmit={checkout}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie mas.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Repite tu Mail</Form.Label>
          <Form.Control
            className={
              errors.includes("mailCheck")
                ? "form-control is-invalid"
                : "form-control"
            }
            type="email1"
            placeholder="Mail"
            value={mailCheck}
            onChange={(e) => setMailCheck(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={checkout}>
          Confirmar
        </Button>
      </Form>
      <Row>
        {storeResult !== "hide" ? (
          <Alert key={storeResult} variant={storeResult}>
            Tu orden se ha procesado correctamente!
          </Alert>
        ) : null}
      </Row>
    </Container>
  );
}

export default Checkout;
