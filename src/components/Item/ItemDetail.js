import React, {useState} from "react";
import {Card,ButtonGroup,ButtonToolbar,Button} from "react-bootstrap";
import ItemCount from "./ItemCount";

import {CartCtxConsumer} from "../../CartContext";

function ItemDetail({item}) {

    const [count,setCount] = useState(0);
    
    return(
        <CartCtxConsumer>
        {cartCtx => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <hr/>
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <ItemCount min="0" max={item.stock} changeCount={(c) => setCount(c)}></ItemCount> 
                <ButtonToolbar className="justify-content-between">
                <ButtonGroup>
                    <Button onClick={() => {cartCtx.addItem(item,count)}}>Comprar {count}</Button>
                </ButtonGroup>
                </ButtonToolbar>
                </Card.Body>
            </Card>  
        )}
        </CartCtxConsumer>
    )
}  


export default ItemDetail;
  