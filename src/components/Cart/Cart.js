import React, {useEffect, useState} from "react";
import { CartCtxConsumer } from "../../CartContext";
import Item from "../Item/Item.js";


function Cart(){
    const [productArray,setProductArray] = useState([]);
    return(
<CartCtxConsumer>{cartCtx => (
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
{cartCtx.cart.map(i => { console.log(i); return <Item key={i.item.id} prod={i.item} />})}
            </tbody>
        </table>
        </div>)}
        </CartCtxConsumer>
    )

};

export default Cart;