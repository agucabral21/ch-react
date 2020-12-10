import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail.js";
import  {getProduct} from "../../services/restServices";
import {useParams} from 'react-router-dom';
/*
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
*/
import {Spinner,Container} from "react-bootstrap";


function ItemDetailContainer({init}) {
    
    const [item,setItem] = useState([]);
    const [showCard,setShowCard] = useState(false);
    const {itemId} = useParams();

    useEffect(() => {
        getProduct(itemId).then(res => {
            setItem(res);
            setShowCard(true);
        })       
    },[]);


    return( 
    
    <Container variant="light" bg="secondary" >        
        { !showCard && <Spinner  animation="border" /> }
        {  showCard && <ItemDetail item={item}/> }       
    </Container>
   
)   
}  
export default ItemDetailContainer;
  