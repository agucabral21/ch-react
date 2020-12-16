import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail.js";
import  {getProduct} from "../../services/restServices";
import {useParams} from 'react-router-dom';
/*
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
*/
import {Spinner,Container} from "react-bootstrap";
import {getItemById} from "../FirebaseDB/FirebaseQueries"

function ItemDetailContainer({DB}) {
    
    const [item,setItem] = useState([]);
    const [showCard,setShowCard] = useState(false);
    const {itemId} = useParams();

    useEffect(() => {

        getItemById(DB,itemId).then(res => {
            console.log(res);
            setItem(res);
            setShowCard(true);
        })       
        //getProduct(itemId)
    },[]);


    return( 
    
    <Container variant="light" bg="secondary" >        
        { !showCard && <Spinner  animation="border" /> }
        {  showCard && <ItemDetail item={item}/> }       
    </Container>
   
)   
}  
export default ItemDetailContainer;
  