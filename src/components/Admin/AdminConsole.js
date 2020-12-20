import React, {useContext} from "react";
import CartContext from "../../contexts/CartContext";
import {ButtonGroup, Button} from "react-bootstrap";
import {storeTestData} from "../FirebaseDB/FirebaseQueries"

function AdminConsole(){


    const cartCtx = useContext(CartContext);

    return(           
            <div>
                 <ButtonGroup>
                 <Button >CargarBase con Datos defecto</Button>       </ButtonGroup>    
            </div>
    )
};

export default AdminConsole;