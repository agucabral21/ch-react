import React, {useEffect, useState} from "react";
import Item from "./Item.js";
//import  {getProducts} from "../../services/restServices";
import { Spinner, Container,Dropdown } from "react-bootstrap";
import {fetchItems} from "../FirebaseDB/FirebaseQueries"
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function ItemList() {
    
    let { catId } = useParams("all");
    const [productArray,setProductArray] = useState([]);
    const [category,setCategory] = useState("all");
    const [loading,setLoading] = useState(true);    


    function loadProducts(){    
        setLoading(true)       
        fetchItems(catId?catId:"all").then(res =>{            
            setProductArray(res)
            setLoading(false)
        }).catch((e) => {
            setLoading(false);
            alert(e);
        })      
    }
   
    useEffect(loadProducts,[catId]);  

    return (   
        <Container>
         <h1>Productos {catId ?          
          <button type="button" class="btn btn-info">
            {"Categoria: "+catId+" "}  
            <Link to={"/"}><span class="badge badge-light">  x</span></Link>
          </button>                    
          : null}</h1>
        { !loading ? 
        <div className="table-responsive">
            <table className="table table-sm">
                <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Stock</th>
                </tr>
                </thead>
                <tbody>
                    {productArray.map(i =>{console.log(i); return <Item key={i.id} item={i} />})}
                </tbody>
            </table>
        </div>
        : null }
        { loading ? 
            <Spinner  animation="border" /> : null }
        </Container>
        );
  }  
export default ItemList;