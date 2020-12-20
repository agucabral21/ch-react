import React, { useState, useContext } from "react";
import {
  Card,
  ButtonGroup,
  ButtonToolbar,
  Button,
  Row,
  Image,
  Col,
} from "react-bootstrap";
import ItemCount from "./ItemCount";
import CartContext from "../../contexts/CartContext";

function ItemDetail({ item }) {
  const [count, setCount] = useState(0);
  const cartCtx = useContext(CartContext);

  return (
    <div className="container">
      <Row>
        <Col>
          <Image
            src={process.env.PUBLIC_URL + "/images/" + item.imageId}
            fluid
          />
        </Col>

        <Col>
          <Row>
            {" "}
            <h1>{item.label}</h1>
          </Row>
          <Row>
            <Card.Text>{item.description}</Card.Text>
          </Row>
          <Row className="justify-content-md-center">
            <ItemCount
              min="0"
              max={item.stock}
              changeCount={(c) => setCount(c)}
            ></ItemCount>
          </Row>
          <Row className="justify-content-md-center">
            <ButtonToolbar>
              <ButtonGroup>
                <Button
                  onClick={() => {
                    cartCtx.cartDispatch({
                      type: "ADD_ITEM",
                      payload: {
                        item: item,
                        count: count,
                      },
                    });
                  }}
                >
                  Comprar {count}
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ItemDetail;
