import React, {useState, useContext} from "react";
import {Card,ButtonGroup,ButtonToolbar,Button} from "react-bootstrap";
import ItemCount from "./ItemCount";
import CartContext from "../../contexts/CartContext";

function ItemDetail({item}) {

    const [count,setCount] = useState(0);
    const cartCtx = useContext(CartContext);
    
    return(
       
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL+"/images/"+item.imageId} />
                <hr/>
                <Card.Body>
                <Card.Title>{item.label}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <ItemCount min="0" max={item.stock} changeCount={(c) => setCount(c)}></ItemCount> 
                <ButtonToolbar className="justify-content-between">
                <ButtonGroup>
                    <Button onClick={() => 
                        {cartCtx.cartDispatch(
                            {type:"ADD_ITEM",
                             payload:{
                                 item:item,
                                 count:count
                             }}
                         )}}>Comprar {count}</Button>

<Button onClick={() => 
                        {cartCtx.cartDispatch(
                            {type:"con",
                             payload:{
                                 item:item,
                                 count:count
                             }}
                         )}}>Consola {count}</Button>
                </ButtonGroup>
                </ButtonToolbar>
                </Card.Body>
            </Card>  
        
    )
}  


export default ItemDetail;
  