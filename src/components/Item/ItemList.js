import React, {useEffect, useState} from "react";
import Item from "./Item.js";
import  {getProducts} from "../../services/restServices";
import { Spinner, Container,Dropdown } from "react-bootstrap";

function ItemList() {
    
    const [productArray,setProductArray] = useState([]);
    const [category,setCategory] = useState("all");
    const [loading,setLoading] = useState(true);

    function loadProducts(){        
        setLoading(true)
        getProducts(category).then(res => {
            setProductArray(res);
            setLoading(false);
        }) 
    }
    
    useEffect(loadProducts,[category]);   
    

    return (   
        <Container>
        <Dropdown onSelect={(e,o) =>  setCategory(e) }>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="tech">Tecnologia</Dropdown.Item>
                <Dropdown.Item eventKey="cosmetics">Cosmetica</Dropdown.Item>
                <Dropdown.Item eventKey="random">Producto Aleatorio</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        { !loading ? 
        <div className="table-responsive">
            <table className="table table-sm">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Color</th>
                    <th scope="col">Detalle</th>
                </tr>
                </thead>
                <tbody>
                    {productArray.map(i => <Item key={i.id} item={i} />)}
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